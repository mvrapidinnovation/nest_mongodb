import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserstatService } from './userstat.service';
import { createUserDTO } from './dto/create-user.dto';
import { userStat } from './interfaces/userstat.interface';

@Controller('userstat')
export class UserstatController {
    constructor(private userstatService: UserstatService) {}

    @Post()
    create(@Body() user: createUserDTO): Promise<userStat> {
        return this.userstatService.create(user);
    }

    @Get()
    findByStatus(): Promise<userStat[]> {
        return this.userstatService.findByStatus();
    }

}
