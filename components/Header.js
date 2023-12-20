import React, { useState } from "react";
import Image from "next/image";
const Header = () => {
  const data = {
    list_nav: [
      { id: 1, title: "Home", href: "#home", isSelected: true },
      { id: 1, title: "Service", href: "#service" },
      { id: 1, title: "Portofolio", href: "#portofolio" },
      { id: 1, title: "Contact", href: "#contact" },
    ],
  };

  const renderNav = () => {
    return data.list_nav.map((item) => {
      return (
        <li key={item.id}>
          <a
            href={item.href}
            className={`block py-2 pr-4 pl-3  rounded ${
              item.isSelected ? " lg:text-teal-700" : "text-black"
            } lg:bg-transparent  lg:p-0 dark:text-white hover:text-teal-700 hover:bg-gray-400 hover:lg:bg-transparent hover:bg-opacity-10`}
            aria-current='page'
          >
            {item.title}
          </a>
        </li>
      );
    });
  };

  const [show, setShow] = useState(false);
  return (
    <header>
      <nav className='fixed top-0 left-0 w-full z-10 shadow-sh-header bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800'>
        <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
          <a href='#' className='flex items-center'>
            <div className='relative w-[76px] h-[73px]'>
              <Image
                src='/images/logo.png'
                alt='logo'
                fill
                placeholder='blur'
                blurDataURL='/images/logo.png'
              ></Image>
            </div>
            <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
              Code<span>atHome</span>
            </span>
          </a>
          <div className='flex items-center lg:order-2'>
            <a
              href='#'
              className='text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-teal-600 dark:hover:bg-teal-700 focus:outline-none dark:focus:ring-teal-800'
            >
              Consult Now
            </a>
            <button
              data-collapse-toggle='mobile-menu-2'
              type='button'
              className='inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
              aria-controls='mobile-menu-2'
              aria-expanded='false'
              onClick={() => setShow(!show)}
            >
              <span className='sr-only'>Open main menu</span>
              <svg
                className='w-6 h-6'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                  clipRule='evenodd'
                />
              </svg>
              <svg
                className='hidden w-6 h-6'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
          </div>
          <div
            className={`${
              show ? "block" : "hidden"
            } justify-between items-center w-full lg:flex lg:w-auto lg:order-1 absolute lg:static top-20 bg-white left-0`}
            id='mobile-menu-2'
          >
            <ul className='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 border md:border-none'>
              {renderNav()}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
