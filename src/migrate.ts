import { MikroORM } from '@mikro-orm/core';
import config from './config/mikro-orm.config'

const migrate = async () => {
  const orm = await MikroORM.init(config);

  const migrator = orm.getMigrator();
  await migrator.up(); // runs migrations up to the latest
  await orm.close(true);
};

export default migrate