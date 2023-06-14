import React from 'react';
import Image from 'next/image';

import Finger from '../assets/images/finger-ci.svg';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between py-2 px-2">
        <div className='flex flex-row items-center'>
            <Image src={Finger} width={30} height={30} alt="Color-Identity"  />
            <span className='mx-2 text-[1.2rem] poppins font-bold'>Color Identity</span>
        </div>
    </header>
  )
}

export default Header