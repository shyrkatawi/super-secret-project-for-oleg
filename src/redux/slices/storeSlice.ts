import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IUser from '../../entities/interfaces';
import { DEFAULT_SEARCHING_VALUE } from '../../entities/constants';

interface IState {
  users: IUser[];
  searchingValue: string;
}

const storeSlice = createSlice({
  name: 'storeSlice',
  initialState: {
    users: [],
    searchingValue: DEFAULT_SEARCHING_VALUE,
  } as IState,
  reducers: {
    setUsers: (state, action: PayloadAction<IUser[]>) => {
      state.users = action.payload;
    },
    setSearchingValue: (state, action: PayloadAction<string>) => {
      state.searchingValue = action.payload;
    },
  },
});

export default storeSlice;
export const { setUsers, setSearchingValue } = storeSlice.actions;
