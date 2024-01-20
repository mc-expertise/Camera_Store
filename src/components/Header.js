import React, { useContext, useState } from 'react';

import logo from '../imgs/logo.png';
import { SlBag } from 'react-icons/sl';
import { FiMenu } from 'react-icons/fi';

import { Link } from 'react-router-dom';
import SearchForm from '../components/SearchForm';
import CategoryNavMobile from '../components/CategoryNavMobile';
import Cart from '../components/Cart';
import { CartContext } from '../context/CartContext';

const Header = () => {
  const { isOpen, setIsOpen, itemsAmount } = useContext(CartContext);
  const [catNavMobile, setcatNavMobile] = useState(false);
  return (
    <>
      <header
        className="bg-primary py-6 fixed w-full top-0 z-40
    lg:relative xl:mb-[30px]">
        <div className="container mx-auto">
          <div
            className="flex flex-row gap-4 lg:items-center justify-between
        mb-4 xl:mb-0">
            {/* menu */}
            <div
              onClick={() => setcatNavMobile(true)}
              className="text-3xl xl:hidden cursor-pointer">
              <FiMenu />
            </div>
            {/* category nav mobile */}
            <div
              className={`${catNavMobile ? 'left-0' : '-left-full'} fixed
          top-0 bottom-0 z-30 w-full h-screen transition-all duration-300`}>
              <CategoryNavMobile setcatNavMobile={setcatNavMobile} />
            </div>
            {/* logo */}
            <Link to={'/'}>
              <img src={logo} alt="" />
            </Link>
            {/* seachform -show only on desktop */}
            <div className="hidden w-full xl:flex xl:max-w-[734px]">
              <SearchForm />
            </div>
            {/* phone & cart */}
            <div className="flex items-center gap-x-[10px]">
              <div className="hidden xl:flex uppercase">
                Need help? - 123 456 879
              </div>
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="relative cursor-pointer ">
                <SlBag className="text-2xl" />
                <div
                  className="bg-accent text-primary absolute w-[18px]
              h-[18px] rounded-full top-3 -right-1 text-[13px] flex justify-center items-center font-bold tracking-[-0.1em]">
                  {itemsAmount}
                </div>
              </div>
              {/* cart */}
              <div
                className={`
            ${isOpen ? 'right-0' : '-right-full'}
            bg-[#0e0f10] shadow-xl fixed top-0 bottom-0 w-full z-30 md:max-w-[500px] transition-all duration-300`}>
                <Cart />
              </div>
            </div>
          </div>
          {/* searchform - show on mobile only */}
          <div className="xl:hidden">
            <SearchForm />
          </div>
        </div>
        {isOpen && (
          <div className="gradCart fixed w-full h-screen left-0 top-0 z-20"></div>
        )}
      </header>
    </>
  );
};

export default Header;
