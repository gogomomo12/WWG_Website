import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import PopupMenu from './PopupMenu';

// Define the paths to the images as strings.
// These paths are relative to the `public` directory.
const logo = "/images/logo.png";
const menu = "/images/menu.svg";

const Navbar = ({ navlinks }) => {
  const [popupState, setPopupState] = useState(false);
  const [navState, setNavState] = useState(false);
  const onTriggerPopup = () => setPopupState(!popupState);

  const onNavScroll = () => {
    if(window.scrollY > 180) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onNavScroll);

    return () => {
      window.removeEventListener('scroll', onNavScroll);
    }
  }, [])
  

  return (
   <>
      <header className={`
        nav-default ${navState && 'nav-sticky'}
      `}>
        <nav className='flex items-center justify-between wwg-container'>
          <Link href={`/`}>
            <a className="flex items-center">
              <img src={logo} alt='logo' className='w-15 h-5 object-fill' />
            </a>
          </Link>
          {/* <ul className='flex items-center lg:hidden gap-7'>
            {navlinks?.map((val, i) => (
              <li key={i}>
                <Link href={'#'}>
                  <a className="text-lg text-slate-900">{val.link}</a>
                </Link>
              </li>
            ))}
          </ul> */}

<ul className='flex items-center lg:hidden gap-7 mr-6 lg:mr-10'>
  {navlinks?.map((val, i) => (
    <li key={i}>
      <Link href={val.path}>
        <a className="text-lg mr-8 text-slate-900 hover:text-teal-500 transform hover:scale-110">{val.link}</a>
      </Link>
    </li>
  ))}
</ul>

          <ul className='flex items-center lg:hidden'>
            <li><button type='button' className='button-emrald px-7 text-base'>Join Us</button></li>
          </ul>
          <ul className='hidden lg:flex items-center'>
            <li><button type='button' className='flex items-center justify-center transition-all duration-200 active:scale-90 cursor-pointer' onClick={onTriggerPopup}><img src={menu} alt="menu" className='object-cover shadow-sm filter' /></button></li>
          </ul>
        </nav>
      </header>
      <PopupMenu navlinks={navlinks} popupState={popupState} />
   </>
  )
}

export default Navbar;
