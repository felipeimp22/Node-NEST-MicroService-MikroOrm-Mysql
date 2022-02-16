import { Logger } from '@nestjs/common'
import { Options } from '@mikro-orm/core'
import { SqlHighlighter } from '@mikro-orm/sql-highlighter'

require('dotenv').config({
  path: `${__dirname}/../../.env`
})

const logger = new Logger('MikroORM')
const config:Options = {
  entities:
    process.env.NODE_ENV === 'production'
      ? ['dist/entities/*.js']
      : ['src/entities/*.ts'],
  discovery: {
    warnWhenNoEntities: true, // by default, discovery throws when no entity is processed
    requireEntitiesArray: false, // force usage of class refrences in `entities` instead of paths
    alwaysAnalyseProperties: false // do not analyse properties when not needed (with ts-morph)
  },
  migrations: {
    tableName: `migrations`,
    path: 'production'
    ? 'dist/migrations/'
    : 'migrations/',
    pattern: /^[\w-]+\d+\.(ts|js)$/,
    transactional: true,
    disableForeignKeys: true,
    allOrNothing: true,
    safe: true,
    emit: 'ts',
  },
  type: 'mysql',
  dbName: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  highlighter: new SqlHighlighter(),
  debug: process.env.NODE_ENV === 'development',
  logger: logger.log.bind(logger)
}

export default config
