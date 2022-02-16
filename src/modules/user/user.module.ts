import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { User } from 'entities/User';
import { OrmModule } from '../orm/orm.module'
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
    imports: [OrmModule, MikroOrmModule.forFeature([User])],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService]
  })
export class UserModule {}
