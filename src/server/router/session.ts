import { Language, LanguageLevel } from '@/shared/language'
import { z } from 'zod'
import { procedure, router } from '../trpc'
import { v4 as uuid } from 'uuid'

import {
  RtmTokenBuilder,
  RtmRole,
  RtcTokenBuilder,
  RtcRole,
} from 'agora-access-token'

import { TRPCError } from '@trpc/server'

import {
  delRequest,
  getRequest,
  getSession,
  setRequest,
  setSession,
} from '../session-storage'
import { isBlocked } from './blocklist'

const FindMateSchema = z.object({
  language: z.nativeEnum(Language),
  level: z.nativeEnum(LanguageLevel),
})

const createMatchingRequest = procedure
  .input(FindMateSchema)
  .mutation(async ({ input, ctx: { user } }) => {
    if (!user) throw new Error('Unauthorized')

    if (await isBlocked(user))
      throw new TRPCError({
        code: 'FORBIDDEN',
        message: 'Your account is blocked based on reports',
      })

    const key: string = input.language + input.level
    const request = getRequest(key)

    if (request) {
      // create session
      setSession(request.id, {
        userA: request.requester,
        userB: user,
      })

      delRequest(key)
      return { requestId: request.id }
    } else {
      const id = uuid()

      setRequest(key, {
        id: id,
        requester: user,
      })

      return { requestId: id }
    }
  })

const isSessionReady = procedure
  .input(z.string())
  .mutation(({ input }) => !!getSession(input))

const getSessionDetails = procedure
  .input(z.string())
  .mutation(({ input, ctx: { user } }) => {
    const session = getSession(input)
    if (!session || !user)
      throw new TRPCError({ message: 'Session not ready', code: 'NOT_FOUND' })
    if (![session.userA.email, session.userB.email].includes(user.email))
      throw new TRPCError({ code: 'UNAUTHORIZED' })

    const me =
      user.email === session.userA.email ? session.userA : session.userB
    const partner =
      user.email !== session.userA.email ? session.userA : session.userB

    // =============  BUILD TOKENS  ================
    const appId = process.env.NEXT_PUBLIC_AGORA_APP_ID || ''
    const appCert = process.env.AGORA_CERT || ''
    const tokenExp = Math.floor(Date.now() / 1000) + 3600

    const uid = uuid()
    const chatUid = uuid()

    const rtmToken = RtmTokenBuilder.buildToken(
      appId,
      appCert,
      uid,
      RtmRole.Rtm_User,
      tokenExp
    )

    const rtmChatToken = RtmTokenBuilder.buildToken(
      appId,
      appCert,
      chatUid,
      RtmRole.Rtm_User,
      tokenExp
    )

    const rtcToken = RtcTokenBuilder.buildTokenWithUid(
      appId,
      appCert,
      input,
      0,
      RtcRole.PUBLISHER,
      tokenExp
    )

    return {
      me: { name: me.name, email: me.email, image: me.image },
      partner: { name: partner.name, image: partner.image },
      rtmToken,
      rtcToken,
      uid,
      chatUid,
      rtmChatToken,
    }
  })

export const session = router({
  createMatchingRequest,
  isSessionReady,
  getSessionDetails,
})
