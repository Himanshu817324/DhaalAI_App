import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  hasSeenOnboarding: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setOnboardingSeen: (state) => { state.hasSeenOnboarding = true; },
    login: (state, action) => { state.isLoggedIn = true; state.user = action.payload; },
    logout: (state) => { state.isLoggedIn = false; state.user = null; },
  },
});

export const { setOnboardingSeen, login, logout } = authSlice.actions;
export default authSlice.reducer;