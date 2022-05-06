import React from 'react';
import IUser from '../entities/interfaces';

interface Props {
  user: IUser;
}

const User: React.FC<Props> = ({ user }) => {
    console.log('one user changed')
  return (
    <div className="user">
      <div className="user-id"> {user.id}</div>
      <div className="user-name"> {user.name}</div>
      <div className="user-surname"> {user.surname}</div>
    </div>
  );
};

export default React.memo(User);
