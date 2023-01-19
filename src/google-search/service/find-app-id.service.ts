import {
  FindAppIdInboundPortInputDto,
  FindAppIdInboundPortOutputDto,
} from '../inbound-port/find-app-id.inbound-port';
import { FIND_APP_ID_INBOUND_PORT, GoogleSearchByKeywordOutboundPort } from '../outbound-port/google-search-by-keyword.outbound-port';

export class FindAppId implements FindAppIdInboundPort {
  constructor(
    @Inject(GOOGLE_SEARCH_BY_KEYWORD_OUTBOUND_PORT)
    private readonly googleSearchByKeywordOutboundPort: GoogleSearchByKeywordOutboundPort,
  );

  async execute(
    params: FindAppIdInboundPortInputDto,
  ): Promise<FindAppIdInboundPortOutputDto> {
    try {
      const searchResult = await this.googleSearchByKeywordOutboundPort.execute(
        {
          keyword: params.keyword
        }
      );

      if (!searchResult) {
        return [];
      }

      return pipe(
        searchResult.items,
        
      )
    }
  }
}
