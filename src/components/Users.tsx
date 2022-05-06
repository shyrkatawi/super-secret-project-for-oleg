import React from 'react';
import { useSelector } from 'react-redux';
import IUser from '../entities/interfaces';
import User from './User';
import { RootState } from '../redux/store';

const Users: React.FC = () => {
  const users: IUser[] = useSelector((state: RootState) => state.storeReducer.users);
  const searchingValue: string = useSelector((state: RootState) => state.storeReducer.searchingValue);

  const filteredUsers = users
    .filter(
      (user: IUser) => user.name.includes(searchingValue) || user.surname.includes(searchingValue),
    )
    .map((user: IUser) => <User user={user} key={user.id} />);
  console.log('Users changed');

  return <div className="users">{filteredUsers}</div>;
};

export default React.memo(Users);
