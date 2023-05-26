import { Controller, Get, Param } from "@nestjs/common"
import { UserService } from "./user.service"

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get(":id")
  async getUserById(@Param("id") id: number): Promise<any> {
    const user = await this.userService.getUserById(Number(id))
    return user
  }
  @Get("create/:id")
  async createUserWithId(@Param("id") id: number): Promise<any> {
    const user = await this.userService.createUserWithId(Number(id))
    return user
  }
}
