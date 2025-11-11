import { serve } from '@hono/node-server'
import app from './dist/server.js'

const port = process.env.PORT ? Number(process.env.PORT) : 3000
serve({ fetch: app.fetch, port })
console.log(`JioSaavn API running at http://localhost:${port} (docs at /docs)`)


