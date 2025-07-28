import { fastify } from 'fastify'
import { knex } from './database'
import { randomUUID } from 'crypto'

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
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server running')
  })
