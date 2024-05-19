import { Hono } from 'hono'

const app = new Hono()

function authMiddleware(c: any, next: any) {
  if(c.req.header("Authorization")) {
    next()
  } else {
    return c.text("You are not authorized!")
  }
}

app.get('/', authMiddleware, async (c) => {
  const body = await c.req.json()
  console.log(body)
  console.log(c.req.header("Authorization"))
  console.log(c.req.query("params"))

  return c.text("Hello hono!")
})

export default app
