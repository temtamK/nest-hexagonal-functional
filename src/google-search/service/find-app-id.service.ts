import { filter, head, map, pipe, reject, toArray, uniq } from '@fxts/core';
import {
  FindAppIdInboundPort,
  FindAppIdInboundPortInputDto,
  FindAppIdInboundPortOutputDto,
} from '../inbound-port/find-app-id.inbound-port';
import {
  GoogleSearchByKeywordOutboundPort,
  GOOGLE_SEARCH_BY_KEYWORD_OUTBOUND_PORT,
} from '../outbound-port/google-search-by-keyword.outbound-port';
import { Inject } from '@nestjs/common';

export class FindAppIdService implements FindAppIdInboundPort {
  constructor(
    @Inject(GOOGLE_SEARCH_BY_KEYWORD_OUTBOUND_PORT)
    private readonly googleSearchByKeywordOutboundPort: GoogleSearchByKeywordOutboundPort,
  ) {}

  async execute(
    params: FindAppIdInboundPortInputDto,
  ): Promise<FindAppIdInboundPortOutputDto> {
    try {
      const searchResult = await this.googleSearchByKeywordOutboundPort.execute(
        {
          keyword: params.keyword,
        },
      );

      if (!searchResult) {
        return [];
      }

      return pipe(
        searchResult.items,
        map((item) => item.link),
        filter((link) => link.includes('https://apps.apple.com')),
        map((link) => link.match(/[0-9]+/gi)),
        map(head),
        reject((appId) => appId.length > 10),
        reject((appId) => appId.length < 9),
        uniq,
        toArray,
      );
    } catch (e) {
      throw e;
    }
  }
}
