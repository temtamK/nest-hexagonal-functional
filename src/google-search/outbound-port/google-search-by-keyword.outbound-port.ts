export type GoogleSearchByKeywordOutboundPortInputDto = {
  keyword: string;
};

export type GoogleSearchByKeywordOutboundPortOutputDto = Array<string>;

export const FIND_APP_ID_INBOUND_PORT = 'FIND_APP_ID_INBOUND_PORT' as const;

export interface GoogleSearchByKeywordOutboundPort {
  execute(
    params: GoogleSearchByKeywordOutboundPortInputDto,
  ): Promise<GoogleSearchByKeywordOutboundPortOutputDto>;
}
