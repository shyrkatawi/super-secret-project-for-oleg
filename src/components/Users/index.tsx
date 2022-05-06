import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import User from './componets/User';
import { RootState } from '../../redux/store';
import Input from './componets/Input';
import { TUser } from './componets/User/types';

const Users: React.FC = () => {
  const users: TUser[] = useSelector((state: RootState) => state.storeReducer.users);
  const searchingValue: string = useSelector(
    (state: RootState) => state.storeReducer.searchingValue,
  );
  const filteredUsers = useMemo(() => {
    return users
      .filter(
        (user: TUser) =>
          user.name.includes(searchingValue) || user.surname.includes(searchingValue),
      )
      .map((user: TUser) => <User user={user} key={user.id} />);
  }, [users, searchingValue]);

  return (
    <div className="users">
      <Input />
      <div className="users__table">{filteredUsers}</div>
    </div>
  );
};

export default React.memo(Users);
