import { Controller, Get, Inject } from '@nestjs/common';
import {
  FindMembersInboundPort,
  FIND_MEMBERS_INBOUND_PORT,
} from '../inbound-port/find-members.inbound-port';

@Controller()
export class GetMembersController {
  constructor(
    @Inject(FIND_MEMBERS_INBOUND_PORT)
    private readonly findMembersInBoundPort: FindMembersInboundPort,
  );

  @Get('/members')
  async handle() {
    return this.findMembersInBoundPort.execute();
  }
}
