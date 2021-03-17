import React, { useMemo, useContext } from 'react';

import { Context } from '../../context/context';

import evilMartians from './images/evil-martians-logo.png';
import Avatar from './images/almost-martian.jpg';

const Header = () => {
  const { username, deleteUsername } = useContext(Context);
  const headerUserProfile = useMemo(() => {
    if (username === null) return null;

    return (
      <div className="header__user-profile">
        <img className="header__user-profile-avatar" src={Avatar} alt="Profile avatar" width={30} height={30} />
        <span className="header__user-profile-name">{username}</span>
        <ul className="header__menu">
          <li role="presentation" className="header__menu-item" onClick={deleteUsername}>
            <i className="fas fa-sign-out-alt" />
            <span className="header__menu-title">Log out</span>
          </li>
        </ul>
      </div>
    );
  }, [username]);
  return (
    <header className="header">
      <div className="container header__information">
        {/* Блок с логотип компании */}
        <div>
          <a href="https://evilmartians.com/">
            <img src={evilMartians} alt="Логотип компании Evil Martians" width={80} />
          </a>
        </div>
        {/*  Блок с информацией о логине */}
        { headerUserProfile }
      </div>
    </header>

  );
};

export default Header;
