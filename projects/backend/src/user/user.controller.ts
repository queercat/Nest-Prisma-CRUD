import { Body, Controller, HttpException, Post, Res } from "@nestjs/common"
import { UserService } from "./user.service"
import { Prisma } from "@prisma/client"
import { argon2id, verify } from "argon2"

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post("")
  async createUser(@Body() body: Prisma.UserCreateInput, @Res() res) {
    try {
      const { password, ...result } = await this.userService.createUser(body)

      if (verify(password, body.password, { type: argon2id })) {
        res.status(201)
        res.send({ ...result })
      }
    } catch (e) {
      throw new HttpException(e.message, 500, { cause: e })
    }
  }
}
