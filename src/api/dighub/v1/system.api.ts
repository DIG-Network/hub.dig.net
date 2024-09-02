import { dighubApi } from './index';
// @ts-ignore
import { BaseQueryResult } from '@reduxjs/toolkit/dist/query/baseQueryTypes';

export interface Health {
  message: string;
  timestamp: string;
}

interface ServerHealth {
  isHealthy: boolean;
  readOnly: boolean;
}

const systemApi = dighubApi.injectEndpoints({
  endpoints: (builder) => ({
    getHealth: builder.query<ServerHealth, void>({
      query: () => ({
        url: `/healthz`,
        method: 'GET',
      }),
      transformResponse: (response: BaseQueryResult<Health>, meta): ServerHealth => {
        const isHealthy = response?.message === 'OK';
        const readOnly = meta?.response?.headers.get('cw-read-only') === 'true';
        return { isHealthy, readOnly };
      },
      keepUnusedDataFor: 0,
    }),
    getHealthImmediate: builder.mutation<boolean, void>({
      query: () => ({
        url: `/healthz`,
        method: 'GET',
      }),
      transformResponse(baseQueryReturnValue: BaseQueryResult<Health>): boolean {
        return baseQueryReturnValue?.message === 'OK';
      },
    }),
  }),
});

export const { useGetHealthQuery, useGetHealthImmediateMutation } = systemApi;
