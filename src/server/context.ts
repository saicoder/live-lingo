import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { User } from '@/shared/user'
import { inferAsyncReturnType, TRPCError } from '@trpc/server'
import * as trpcNext from '@trpc/server/adapters/next'
import { unstable_getServerSession } from 'next-auth'

export async function createContext({
  req,
  res,
}: trpcNext.CreateNextContextOptions) {
  const session = await unstable_getServerSession(req, res, authOptions)

  return {
    user: session?.user as User,
  }
}

export type Context = inferAsyncReturnType<typeof createContext>
