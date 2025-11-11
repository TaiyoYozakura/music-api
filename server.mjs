import { env } from 'node:process'
import { serve } from '@hono/node-server'
import app from './dist/server.js'

const port = env.PORT ? Number(env.PORT) : 3000
serve({ fetch: app.fetch, port })
console.info(`JioSaavn API running at http://localhost:${port} (docs at /docs)`)
