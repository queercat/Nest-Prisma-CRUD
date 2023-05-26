import { Module } from "@nestjs/common"
import { HewwoController } from "./hewwo.controller"

@Module({
  imports: [],
  controllers: [HewwoController],
  providers: [],
})
export class AppModule {}
