"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@mikro-orm/core");
const mikro_orm_config_1 = require("./config/mikro-orm.config");
const migrate = async () => {
    const orm = await core_1.MikroORM.init(mikro_orm_config_1.default);
    const migrator = orm.getMigrator();
    await migrator.up();
    await orm.close(true);
};
exports.default = migrate;
//# sourceMappingURL=migrate.js.map