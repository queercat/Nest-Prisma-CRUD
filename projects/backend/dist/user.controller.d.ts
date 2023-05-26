import { UserService } from "./user.service";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUserById(id: number): Promise<any>;
    createUserWithId(id: number): Promise<any>;
}
