import React from 'react';
import '../styles/header.css';
import { CartIcon } from '../components/MySVGComponent'

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className='header'>
      <h1 className='header_title'>{title}</h1>
      <div className='header_icon'>
        <CartIcon id='svg' />
      </div>
    </header>
  );
};

export default Header;
