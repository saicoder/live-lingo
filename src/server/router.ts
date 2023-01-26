import { router } from './trpc'

import { session } from './router/session'
import { blocklist } from './router/blocklist'

// AppRouter
export const appRouter = router({
  session,
  blocklist,
})

export type AppRouter = typeof appRouter
