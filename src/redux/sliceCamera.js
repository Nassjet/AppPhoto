// sliceCamera.js
import { createSlice } from '@reduxjs/toolkit';

const sliceCamera = createSlice({
  name: 'camera',
  initialState: {
    type: 'back',
  },
  reducers: {
    swapCamera: (state) => {
      state.type = state.type === 'back' ? 'front' : 'back';
    },
  },
});

export const { swapCamera } = sliceCamera.actions;

export default sliceCamera.reducer;