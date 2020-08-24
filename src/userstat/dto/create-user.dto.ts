import { nameDTO } from "./name.dto";

export class createUserDTO {
    readonly name: nameDTO;
    readonly username: string;    
    readonly status: boolean;
}