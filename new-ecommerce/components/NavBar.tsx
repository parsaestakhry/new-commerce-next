import React from 'react'
import { ShoppingCart } from './ShoppingCart'
import { Avatar } from './Avatar';
import { SearchBox } from './SearchBox';
import { MobileDrawer } from './MobileDrawer';

export const NavBar = () => {
  return (
    <div>
      <div className="navbar bg-gray-800">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl sm:flex hidden">daisyUI</a>
          <div className='sm:hidden'>
            <MobileDrawer/>
          </div>
          <div className="mx-auto">
            <SearchBox />
          </div>
        </div>
        <div className="flex">
          <ShoppingCart />
          <Avatar />
        </div>
      </div>
    </div>
  );
}
