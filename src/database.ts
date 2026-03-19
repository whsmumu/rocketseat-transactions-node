import setupKnex from 'knex'
import type { Knex } from 'knex'
import { env } from './env/index.js'

export const config: Knex.Config = {
  client: env.DATABASE_CLIENT as string,
  connection: env.CONNECTION_STRING as string,
  migrations: {
    extension: env.MIGRATIONS_EXTENSION as string,
    directory: env.MIGRATIONS_DIRECTORY as string,
  },
}

export const knex = setupKnex(config)
