import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  name: string;
}

interface AuthState {
  isLoggedIn: boolean;
  hasSeenOnboarding: boolean;
  user: User | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  hasSeenOnboarding: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setOnboardingSeen: (state) => {
      state.hasSeenOnboarding = true;
    },
    login: (state, action: PayloadAction<User>) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    setInitialState: (state, action: PayloadAction<Partial<AuthState>>) => {
        return { ...state, ...action.payload };
    }
  },
});

export const { setOnboardingSeen, login, logout, setInitialState } = authSlice.actions;
export default authSlice.reducer;