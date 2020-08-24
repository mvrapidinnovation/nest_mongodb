import { nameDTO } from "./name.dto";
import { Exclude, Expose } from "class-transformer";

export class createUserDTO {
    @Exclude()
    readonly name: nameDTO;
    
    readonly username: string;    
    
    @Expose({ name: 'Logged In' })
    readonly status: boolean;

    @Expose({ name: 'Full name' })
    get fullname(): string {
        return `${this.name.firstName} ${this.name.lastName}`;
    }

    constructor(partial: Partial<createUserDTO>) {
        Object.assign(this, partial);
    }
}