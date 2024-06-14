import { createSlice } from '@reduxjs/toolkit';

export const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    movie: null, // Set initial value to null
  },
  reducers: {
    add: (state, action) => {
      state.movie = action.payload; // Update user object
    },
    // logout: (state) => {
    //   state.user = null; // Reset user to null when logging out
    // },
  },
});

export const { add } = movieSlice.actions;

export const selectMovie= (state) => state.movie ? state.movie.movie : null;

export default movieSlice.reducer;
