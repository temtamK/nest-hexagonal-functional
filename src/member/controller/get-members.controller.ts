import { Controller, Get, Inject } from "@nestjs/common";

@Controller()
export class GetMembersController {
    constructor (
        @Inject()
    )

    @Get('/members')
    async handle() {
        return this.
    }
}