import { Injectable } from "@nestjs/common"
import { PrismaService } from "./prisma.service"
import { Prisma, User } from "@prisma/client"

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async user(input: Prisma.UserWhereUniqueInput): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: input,
    })
  }

  async createUserWithId(id: number) {
    const user = await this.prisma.user.create({
      data: {
        id,
        email: "test@example.com",
        name: "Test",
        posts: {},
      },
    })

    return user
  }

  async getUserById(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id },
    })

    if (!user) {
      return "User not found"
    }

    return user
  }
}
