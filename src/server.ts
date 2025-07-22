import { fastify } from 'fastify'

const app = fastify()

app.get('/', () => {
  console.log('hello')
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server running')
  })
