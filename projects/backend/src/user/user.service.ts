import { Injectable } from "@nestjs/common"
import { PrismaService } from "../prisma.service"
import { Prisma, User } from "@prisma/client"
import { argon2id, hash } from "argon2"

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    const { password, ...rest } = data

    const hashed = await hash(password, { type: argon2id })

    const user: Prisma.UserCreateInput = {
      ...rest,
      password: hashed,
    }

    try {
      const result = await this.prisma.user.create({ data: user })
      return result
    } catch (e) {
      throw new Error("Error creating user")
    }
  }
}
