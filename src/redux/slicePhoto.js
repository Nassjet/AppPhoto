import { createSlice } from "@reduxjs/toolkit";

const slicePhoto = createSlice({
  name:'photos',
  initialState: {
    galery: []
  },
  reducers: {
    takePhoto: (state,action) => {
      state.galery.push(action.payload);
    },
    deletePhoto: (state, action) => {
      state.galery = state.galery.filter((photo) => photo.id !== action.payload);
    },
  }
})

export const { takePhoto, deletePhoto } = slicePhoto.actions;

// On exporte le reducer pour l'ajouter au store
export default slicePhoto.reducer;