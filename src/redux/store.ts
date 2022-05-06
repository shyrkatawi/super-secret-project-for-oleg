import { configureStore } from '@reduxjs/toolkit';
import storeSlice from './slices/storeSlice';

export const store = configureStore({
  reducer: {
    storeReducer: storeSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
