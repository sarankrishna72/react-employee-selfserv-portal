import React from 'react'
import { Outlet } from 'react-router-dom';
import './AuthLayout.scss';

const AuthLayout = () => {
  return (
    <>
        <div className='flex flex-wrap h-screen overflow-auto'>
          <div className='w-full hidden sm:hidden lg:block lg:w-7/12 xl:w-8/12 relative'>
            <div className='back-image absolute top-0 right-0 bottom-0 left-0 bg-cover bg-no-repeat'></div>
          </div>
          <div className='w-full font-pop lg:w-5/12 xl:w-4/12 flex items-center'>
            <Outlet/>
          </div>
        </div>
    </>
  )
}

export default AuthLayout;