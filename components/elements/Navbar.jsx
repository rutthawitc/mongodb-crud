import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between px-8 py-3 bg-slate-500'>
      <Link href={'/'} className='font-medium text-white'>
        RCApps
      </Link>
      <Link href={'/addTopic'} className='p-2 bg-white rounded-lg'>
        Add Topic
      </Link>
    </nav>
  );
};

export default Navbar;
