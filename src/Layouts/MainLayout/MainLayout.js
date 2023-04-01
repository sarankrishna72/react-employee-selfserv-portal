import React from 'react'
import './MainLayout.scss';
import { Outlet } from 'react-router-dom';
import TopBar from '../../Components/TopBar/TopBar';
import LeftBar from '../../Components/LeftBar/LeftBar';

const MainLayout = () => {
  return (
    <>
        <main className='container-scroller overflow-x-hidden overflow-y-auto bg-white min-h-screen'>
            <div>
                <TopBar/>
            </div>
            <LeftBar/>
            <div className='container-fluid page-body-wrapper lg:flex justify-end'>
                <div className='main-panel'>
                    <div className='content-wrapper w-full grow p-4 max-sm:p-4 '>
                        <Outlet/>
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}

export default MainLayout