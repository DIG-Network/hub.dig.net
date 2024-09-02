import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const sampleTag = 'sampleTag';

export const dighubApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
  }),
  reducerPath: 'dighubApi',
  endpoints: () => ({}),
  tagTypes: [sampleTag],
});
