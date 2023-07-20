import React from 'react'
import Link from 'next/link' // Import Link from Next.js

const PopupMenu = ({ navlinks, popupState }) => {
  return (
   <>
      <nav className={`
        fixed top-14 right-14 bg-white bg-opacity-70 opacity-100 z-50 backdrop-filter backdrop-blur-md rounded-lg w-64 h-auto  hidden lg:flex items-center justify-center transition-transform duration-300 ${popupState ? 'lg:showpopup':'lg:noshowpopup'}
      `}>

<ul className='flex items-center justify-center flex-col gap-3 px-2 py-10 text-2xl sm:max-w-full max-w-full mx-auto'>

  {navlinks?.map((val, i) => (
    <li key={i}>
      <Link href={val.path}>
        <a>{val.link}</a>
      </Link>
    </li>
  ))}
  <li><button type='button' className='bg-green-500 text-white font-bold mt-5 sm:w-auto shadow-slate-300 rounded-lg px-10 py-2 text-2xl'>Join Us</button>
</li>



</ul>



      </nav>
   </>
  )
}

export default PopupMenu;
