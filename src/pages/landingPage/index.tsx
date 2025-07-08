import React from 'react';
import NavBar from '../../generalComponents/navBar';
import { Outlet } from 'react-router-dom';

const LandingPage: React.FC = () => {
    return (
        <div className='w-screen overflow-x-none overflow-y-auto  bg-light-white text-purple-bg'>
            <header className='fixed top-0 bg-light-white  flex-center w-full z-40'>
                <NavBar />
            </header>
            <div className=''>
                <Outlet />
            </div>
        </div>
    );
};

export default LandingPage;