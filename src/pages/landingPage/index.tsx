import React from 'react';
import NavBar from '../../generalComponents/navBar';
import { Outlet } from 'react-router-dom';

const LandingPage: React.FC = () => {
    return (
        <div className='w-screen overflow-x-none h-[100dvh] bg-light-white text-purple-bg'>
            <header className='absolute flex-center top-0 w-full z-10'>
                <NavBar/>
            </header>
            <div className=''>
                <Outlet/>
            </div>
        </div>
    );
};

export default LandingPage;