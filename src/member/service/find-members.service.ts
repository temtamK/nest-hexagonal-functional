import {
  FindMembersInboundPortOutputDto,
  FindMembersInboundPort,
  FindMembersInboundPortInputDto,
} from '../inbound-port/find-members.inbound-port';
import {
  FindMembersOutboundPort,
  FIND_MEMBERS_OUTBOUND_PORT,
} from '../outbound-port/find-members.outbound-port';
import { Inject } from '@nestjs/common';

export class FindMembersService implements FindMembersInboundPort {
  constructor(
    @Inject(FIND_MEMBERS_OUTBOUND_PORT)
    private readonly findMembersOutboundPort: FindMembersOutboundPort,
  ) {}

  async execute(
    params: FindMembersInboundPortInputDto,
  ): Promise<FindMembersInboundPortOutputDto> {
    return this.findMembersOutboundPort.execute();
  }
}
