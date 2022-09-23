import Image from 'next/image';
import React from 'react';

import logo from '../../public/logo.svg';

const Logo = () => {
  return (
    <div className='hover:cursor-pointer'>
      <span className='sr-only'>DBS Bank</span>
      <Image src={logo} height={20} width={20} alt='dbs-logo' />
    </div>
  );
};

export default Logo;
