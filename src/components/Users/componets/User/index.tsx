import React from 'react';
import {TUser} from "./types";

interface Props {
  user: TUser;
}

const User: React.FC<Props> = ({ user }) => {
  return (
    <div className="user">
      <div className="user-id"> {user.id}</div>
      <div className="user-name"> {user.name}</div>
      <div className="user-surname"> {user.surname}</div>
    </div>
  );
};

export default React.memo(User);
