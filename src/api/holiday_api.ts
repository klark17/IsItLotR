/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IDateResponse } from '../types/IDateResponse'

export const holidayApi = createApi({
  reducerPath: 'holidayApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://date.nager.at/' }),
  endpoints: (builder) => ({
    getThanksgivingDate: builder.query<string, { year: string }>({
      query: (request) => ({
          url: `api/v3/PublicHolidays/${request.year}/US`,
          method: 'GET',
      }),
      transformResponse: (data: IDateResponse): string => {
        let thanksgivingDate = ''
        data.map((date) => date.name === 'Thanksgiving Day' ? thanksgivingDate = date.date : null)
        return thanksgivingDate
      }
    }),
  }),
})

export const {
  useGetThanksgivingDateQuery
} = holidayApi
