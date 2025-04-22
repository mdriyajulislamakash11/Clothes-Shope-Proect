import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const MainLayouts = () => {
    return (
        <div>
            {/*navber */}
            <Navbar />
            {/* daynamic Routes */}
            <div className='container mx-auto py-16'>

            <Outlet />
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default MainLayouts;