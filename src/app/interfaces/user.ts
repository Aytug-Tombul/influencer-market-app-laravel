import { Permission } from "./permission";
import { Role } from "./role";

export interface User {
    id: number;
    first_name: string;
    last_name:string;
    email:string;
    permissions: Permission[];   
    role: Role;
}
