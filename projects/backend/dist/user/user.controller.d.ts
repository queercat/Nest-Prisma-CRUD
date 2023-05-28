import { UserService } from "./user.service";
import { Prisma } from "@prisma/client";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(body: Prisma.UserCreateInput, res: any): Promise<void>;
}
