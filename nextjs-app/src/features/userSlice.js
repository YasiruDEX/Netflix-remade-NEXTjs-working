import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null, // Set initial value to null
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload; // Update user object
    },
    logout: (state) => {
      state.user = null; // Reset user to null when logging out
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user ? state.user.user : null;

export default userSlice.reducer;
