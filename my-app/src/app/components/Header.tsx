import React from 'react';
import Link from 'next/link'
import { CartIcon } from '../components/MySVGComponent'
import '../styles/header.css';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className='header'>
      <Link href="/pages">
        <h1 className='header_title'>{title}</h1>
      </Link>
      <div className='header_icon'>
        <CartIcon id='svg' />
      </div>
    </header>
  );
};

export default Header;
