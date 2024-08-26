import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../interfaces/User.interface';

const initialState: IUser = { jwt: null };

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addJwt: (state) => {
      state.jwt = 'someJwt';
    },
    removeJwt: (state) => {
      state.jwt = null;
    },
  },
});

export default userSlice.reducer;
export const userAction = userSlice.actions;
