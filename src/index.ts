import { Hono } from 'npm:hono'
import { serve } from 'npm:@hono/node-server'
const app = new Hono()

app.get('/', (c) => c.text('Hello World!'))

const port = parseInt(Deno.env.get('PORT') || '') || 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
