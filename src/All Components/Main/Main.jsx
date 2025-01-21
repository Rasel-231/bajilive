import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Header/Navbar';

const Main = () => {
    const location = useLocation();
    const noHeaderFooter=location.pathname.includes("about")||location.pathname.includes("username")
    return (
        <div>
            {noHeaderFooter || <Navbar/>}
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;