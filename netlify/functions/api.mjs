import { handle } from 'hono/adapter/netlify'
import app from '../../dist/server.js'

export default handle(app)



