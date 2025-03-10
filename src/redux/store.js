import { configureStore } from '@reduxjs/toolkit';
import slicePhoto from './slicePhoto';
export const store = configureStore({
  reducer: {
    favorites: slicePhoto,
  },
});