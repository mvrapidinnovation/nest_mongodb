import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserstatModule } from './userstat/userstat.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest_obj'), UserstatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
