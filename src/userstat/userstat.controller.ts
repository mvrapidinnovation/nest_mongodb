import { Controller, Post, Body, Get, UseInterceptors, ClassSerializerInterceptor, SerializeOptions } from '@nestjs/common';
import { UserstatService } from './userstat.service';
import { createUserDTO } from './dto/create-user.dto';
import { userStat } from './interfaces/userstat.interface';

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
    @SerializeOptions({ excludePrefixes: ['_'], })
    @Get('/showall')
    async findAll(): Promise<createUserDTO> {
        var ans = await this.userstatService.findAll();
        // var { name: { firstName, lastName }, username, status } = ans[0];
        // var obj = { name: { firstName, lastName }, username, status };
        var obj = JSON.parse(JSON.stringify(ans[1]));
        const user = new createUserDTO(obj);
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
