"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const sql_highlighter_1 = require("@mikro-orm/sql-highlighter");
require('dotenv').config({
    path: `${__dirname}/../../.env`
});
const logger = new common_1.Logger('MikroORM');
const config = {
    entities: process.env.NODE_ENV === 'production'
        ? ['dist/entities/*.js']
        : ['src/entities/*.ts'],
    discovery: {
        warnWhenNoEntities: true,
        requireEntitiesArray: false,
        alwaysAnalyseProperties: false
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
    highlighter: new sql_highlighter_1.SqlHighlighter(),
    debug: process.env.NODE_ENV === 'development',
    logger: logger.log.bind(logger)
};
exports.default = config;
//# sourceMappingURL=mikro-orm.config.js.map