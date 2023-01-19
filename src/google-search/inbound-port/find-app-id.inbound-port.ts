export type FindAppIdInboundPortInputDto = {
  keyword: string;
};

export type FindAppIdInboundPortOutputDto = Array<string>;

export const FIND_APP_ID_INBOUND_PORT = 'FIND_APP_ID_INBOUND_PORT';

export interface FindAppIdInboundPort {
  execute(
    params: FindAppIdInboundPortInputDto,
  ): Promise<FindAppIdInboundPortOutputDto>;
}
