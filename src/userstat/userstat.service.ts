import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { userStat } from './interfaces/userstat.interface';
import { createUserDTO } from './dto/create-user.dto';


@Injectable()
export class UserstatService {
    constructor(@InjectModel('UserStat') private readonly userstatModel: Model<createUserDTO>) {}

    async create(user: createUserDTO) {
        // console.log(user);
        const newUser = this.userstatModel(user);
        return await newUser.save({ validateBeforeSave: false });
    }

    async findAll(): Promise<createUserDTO[]> {
        return await this.userstatModel.find().select('-_id -__v').exec();
    }

    async findByStatus(): Promise<createUserDTO[]> {
        return await this.userstatModel.find()
        .where('status')
        .equals('true');
    }
}
