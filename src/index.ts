import { Hono } from 'hono'
import { serve } from '@hono/node-server'
const app = new Hono()

app.get('/', (c) => c.text('Hono!'))

const port = parseInt(process.env.PORT) || 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
