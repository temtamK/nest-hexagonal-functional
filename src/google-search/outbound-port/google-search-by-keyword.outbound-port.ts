export type GoogleSearchByKeywordOutboundPortInputDto = {
  keyword: string;
};

export type GoogleSearchByKeywordOutboundPortOutputDto = {
  items: Array<{
    link: string;
  }>;
};

export const GOOGLE_SEARCH_BY_KEYWORD_OUTBOUND_PORT =
  'GOOGLE_SEARCH_BY_KEYWORD_OUTBOUND_PORT' as const;

export interface GoogleSearchByKeywordOutboundPort {
  execute(
    params: GoogleSearchByKeywordOutboundPortInputDto,
  ): Promise<GoogleSearchByKeywordOutboundPortOutputDto>;
}
