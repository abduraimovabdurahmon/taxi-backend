import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RegisterModule } from './authentication/register/register.module';
import { LoginModule } from './authentication/login/login.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017'), RegisterModule, LoginModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
