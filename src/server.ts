import { fastify } from 'fastify'
import { knex } from './database'
import { randomUUID } from 'crypto'
import { env } from './env'

const app = fastify()

app.get('/hello', async () => {
  const user = await knex('users')
    .insert({
      id: randomUUID(),
      name: 'Usuário Teste',
    })
    .returning('*')
  return user
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP server running')
  })
