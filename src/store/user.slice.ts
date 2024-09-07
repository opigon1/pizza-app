import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IUser } from '../interfaces/User.interface';
import { getUserProfile, handeleLogin } from '../helper/api';
import { AxiosError } from 'axios';
import { IProfile } from '../interfaces/Propfile.interface';
import { RootState } from './store';

const initialState: IUser = {
  jwt: localStorage.getItem('jwt') || null,
  loginError: '',
};

export const getProfile = createAsyncThunk<
  IProfile,
  void,
  { state: RootState }
>('user/profile', async (_, thunkApi) => {
  const jwt = thunkApi.getState().user.jwt;
  if (!jwt) return;
  return await getUserProfile(jwt);
});

export const login = createAsyncThunk(
  'user/login',
  async (data: { email: string; password: string }) => {
    try {
      return await handeleLogin(data.email, data.password);
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data.message);
      }
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    removeJwt: (state) => {
      state.jwt = null;
      localStorage.removeItem('jwt');
    },
    resetErrorMessage: (state) => {
      state.loginError = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.jwt = action.payload.access_token;
      localStorage.setItem('jwt', action.payload.access_token);
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loginError = action.error.message;
    });
    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.profile = action.payload;
    });
  },
});

export default userSlice.reducer;
export const { removeJwt, resetErrorMessage } = userSlice.actions;
