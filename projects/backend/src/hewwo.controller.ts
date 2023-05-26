import { Controller, Get, Param } from "@nestjs/common"

@Controller("hewwo")
export class HewwoController {
  @Get()
  getHewwo(): string {
    return "Hewwo, wowld!"
  }

  @Get(":name")
  getHewwoName(@Param("name") name: string): string {
    return `Hewwo, ${name}!`
  }
}
