import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import { holidayApi } from '../api/holiday_api'

export const store = configureStore({
  reducer: {
    [holidayApi.reducerPath]: holidayApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(holidayApi.middleware)
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
