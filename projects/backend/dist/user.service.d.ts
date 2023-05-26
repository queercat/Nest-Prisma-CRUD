import { PrismaService } from "./prisma.service";
import { Prisma, User } from "@prisma/client";
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    user(input: Prisma.UserWhereUniqueInput): Promise<User | null>;
    createUserWithId(id: number): Promise<User>;
    getUserById(id: number): Promise<User | "User not found">;
}
