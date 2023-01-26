import { z } from 'zod'
import { TRPCError } from '@trpc/server'
import { Redis } from 'ioredis'
import { delSession, getSession } from '../session-storage'
import { procedure, router } from '../trpc'

const DEFAULT_REPORT_EXPIRE = 60 * 60 * 24 * 7 // 7 days
const REPORTS_TO_BLOCKED = 5

const redis = new Redis(process.env.REDIS_URL!)

const report = procedure
  .input(z.string())
  .mutation(async ({ input: sessionId, ctx: { user } }) => {
    if (!user) throw new TRPCError({ code: 'UNAUTHORIZED' })

    const session = getSession(sessionId)
    if (!session) throw new TRPCError({ code: 'UNAUTHORIZED' })

    const { userA, userB } = session
    if (![userA.email, userB.email].includes(user.email))
      throw new TRPCError({ code: 'UNAUTHORIZED' })

    const userToReport = userA.email === user.email ? userB : userA
    delSession(sessionId)

    const redisKey = `report:${userToReport.email}`

    await redis
      .multi()
      .incr(redisKey)
      .expire(redisKey, DEFAULT_REPORT_EXPIRE)
      .exec()

    return { ok: true }
  })

export const isBlocked = async ({ email }: { email: string }) => {
  const count = await redis.get(`report:${email}`)
  return parseInt(count || '0') >= REPORTS_TO_BLOCKED
}

export const blocklist = router({
  report,
})
