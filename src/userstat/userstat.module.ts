import { Module } from '@nestjs/common';
import { UserstatController } from './userstat.controller';
import { UserstatService } from './userstat.service';
import { MongooseModule } from '@nestjs/mongoose';
import { userStatSchema } from './schemas/userstat.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'UserStat', schema: userStatSchema }])],
  controllers: [UserstatController],
  providers: [UserstatService]
})
export class UserstatModule {}
