import { Module } from "@nestjs/common"
import { UserController } from "./user/user.controller"
import { UserService } from "./user/user.service"
import { PrismaService } from "./prisma.service"
import { AuthController } from "./auth/auth.controller"
import { AuthService } from "./auth/auth.service"

@Module({
  imports: [],
  controllers: [UserController, AuthController],
  providers: [PrismaService, UserService, AuthService],
})
export class AppModule {}
