import React from 'react'

const Herotwo = ({ herotwo: { title, subtitle } }) => {
  return (
   <>
      <div className='flex flex-col bg-gradient-to-b from-emerald-200 to-white h-auto w-auto'>
        <div className='wwg-container grid items-start justify-items-center'>
          <div className='grid items-center justify-items-center mt-28 mb-1 md:mt-28 md:mb-12'>
            <h1 className='text-7xl font-bold lg:text-6xl md:text-5xl sm:text-4xl xsm:text-3xl text-black filter drop-shadow-lg'>{title}</h1>
          </div>
        </div>
      </div>
   </>
  )
}

export default Herotwo