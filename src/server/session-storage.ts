import { User } from '@/shared/user'

export interface Session {
  userA: User
  userB: User
}

export interface Request {
  id: string
  requester: User
}

const requests: Record<string, Request> = {}

export const getRequest = (key: string) => requests[key]
export const setRequest = (key: string, req: Request) => (requests[key] = req)
export const delRequest = (key: string) => delete requests[key]

const sessions: Record<string, Session> = {}

export const getSession = (key: string) => sessions[key]
export const setSession = (key: string, ses: Session) => (sessions[key] = ses)
export const delSession = (key: string) => delete sessions[key]
