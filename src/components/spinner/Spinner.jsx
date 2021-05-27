import React from 'react';
import style from './spinner.css';

const Spinner = () => {
  return (
    <div className={style.spinner}>
      <img src='https://media.giphy.com/media/4hskq67xMqnRpYwBXe/giphy.gif' alt='loading' />
    </div>
  );
};

export default Spinner;