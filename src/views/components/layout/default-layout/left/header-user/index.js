import React from 'react';
import './style.scss';
import avatar from '../../../../../assets/images/avatar.svg';

const HeaderUser = () => {
  return (
    <div className="header-user">
      <div className="header-user__avatar">
        <img src={avatar} alt="avatar" />
      </div>
      <div className="header-user__info">
        <div className="header-user__name">
          Derek
        </div>
        <div className="header-user__status">
          Verified Profile
        </div>
      </div>
    </div>
  );
};

export default HeaderUser;
