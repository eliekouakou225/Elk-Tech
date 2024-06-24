import React from 'react';
import emptyImg from '../../Assets/img/13525-empty.gif';

const EmptyList = () => (
  <div className='emptyList-wrap'>
    <img src={emptyImg} alt='empty' />
  </div>
);

export default EmptyList;