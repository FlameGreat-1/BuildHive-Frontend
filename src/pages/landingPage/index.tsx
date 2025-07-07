import React from 'react';
import NavBar from '../../generalComponents/navBar';
import { Outlet } from 'react-router-dom';

const LandingPage: React.FC = () => {
    return (
        <div className='w-screen overflow-x-none overflow-y-auto h-[100dvh] bg-light-white text-purple-bg'>
            <header className='absolute top-0 flex-center w-full z-10'>
                <NavBar />
            </header>
            <div className=''>
                <Outlet />
            </div>
        </div>
    );
};

export default LandingPage;