import { Controller, Post, Body, Get, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { UserstatService } from './userstat.service';
import { createUserDTO } from './dto/create-user.dto';
import { userStat } from './interfaces/userstat.interface';
import { userEntity } from './dto/create-user.entity';

@Controller('userstat')
export class UserstatController {
    constructor(private userstatService: UserstatService) {}

    @Post()
    async create(@Body() user: createUserDTO): Promise<createUserDTO> {
        return await this.userstatService.create(user);
    }

    @Get()
    async findByStatus(): Promise<createUserDTO[]> {
        return await this.userstatService.findByStatus();
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Get('/showall')
    async findAll(): Promise<userEntity> {
        var ans = await this.userstatService.findAll();
        // var { name: { firstName, lastName }, username, status } = ans[0];
        // var obj = { name: { firstName, lastName }, username, status };
        var obj = JSON.parse(JSON.stringify(ans[1]));
        const user = new userEntity(obj);
        return user;
    }
    // findAll(): createUserDTO {
    //     return new createUserDTO({
    //         name: {
    //             firstName: "Mayank",
    //             lastName: "Vats"
    //         },
    //         username: "candidlynxx",
    //         status: true
    //     });
    // }
}
