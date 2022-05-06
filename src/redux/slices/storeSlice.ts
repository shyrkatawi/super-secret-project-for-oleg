import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_SEARCHING_VALUE } from '../../components/Users/componets/Input/constants';
import {TUser} from "../../components/Users/componets/User/types";

type TState = {
  users: TUser[];
  searchingValue: string;
}

const storeSlice = createSlice({
  name: 'storeSlice',
  initialState: {
    users: [],
    searchingValue: DEFAULT_SEARCHING_VALUE,
  } as TState,
  reducers: {
    setUsers: (state, action: PayloadAction<TUser[]>) => {
      state.users = action.payload;
    },
    setSearchingValue: (state, action: PayloadAction<string>) => {
      state.searchingValue = action.payload;
    },
  },
});

export default storeSlice;
export const { setUsers, setSearchingValue } = storeSlice.actions;
