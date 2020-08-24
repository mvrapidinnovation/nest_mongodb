import { nameDTO } from "./name.dto";
import { Exclude } from 'class-transformer';
import { createUserDTO } from "./create-user.dto";

export class userEntity {
    @Exclude()
    readonly name: nameDTO;

    readonly username: string;
    
    readonly status: boolean;

    constructor(partial: Partial<createUserDTO>) {
        Object.assign(this, partial);
    }
}