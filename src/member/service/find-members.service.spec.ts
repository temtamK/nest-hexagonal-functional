import {
  FindMembersOutboundPort,
  FindMembersOutboundPortInputDto,
  FindMembersOutboundPortOutputDto,
} from '../outbound-port/find-members.outbound-port';
import { FindMembersService } from './find-members.service';

class MockFindMembersOutboundPort implements FindMembersOutboundPort {
  private readonly result: FindMembersOutboundPortOutputDto;
  constructor(result: FindMembersOutboundPortOutputDto) {
    this.result = result;
  }
  async execute(
    params: FindMembersOutboundPortInputDto,
  ): Promise<FindMembersOutboundPortOutputDto> {
    return this.result;
  }
}

describe('FindMemberService Spec', () => {
  test('멤버 리스트 반환', async () => {
    const member = [
      {
        name: 'A',
        email: 'A@gmail.com',
        phone: '01012345678',
      },
    ];

    const findMemberService = new FindMembersService(
      new MockFindMembersOutboundPort(member),
    );

    const res = await findMemberService.execute();

    expect(res).toStrictEqual([
      {
        name: 'A',
        email: 'A@gmail.com',
        phone: '01012345678',
      },
    ]);
  });
});
