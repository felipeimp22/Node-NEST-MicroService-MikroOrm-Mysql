import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { OrmModule } from './modules/orm/orm.module';
import { UserProfileModule } from './modules/user-profile/user-profile.module';
import { TesteModule } from './src/modules/teste/teste.module';
import { TesteModule } from './modules/teste/teste.module';
import { TesteModule } from './src/modules/teste/teste.module';

@Module({
  imports: [OrmModule, UserModule, UserProfileModule, TesteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
