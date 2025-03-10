import { configureStore } from '@reduxjs/toolkit';
import slicePhoto from './slicePhoto';
import sliceCamera from './sliceCamera';

export const store = configureStore({
  reducer: {
    photos: slicePhoto,
    camera: sliceCamera,
  },
});