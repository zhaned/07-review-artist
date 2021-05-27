import React from 'react';
import { Link } from 'react-router-dom';
import style from './header.css';

const Header = () => {
  return (
    <header className={style.header}>
      <h1>shuffle</h1>
      <Link to="/">🔎 search</Link>
    </header>
  );
};

export default Header;
