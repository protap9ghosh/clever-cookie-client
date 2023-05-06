import React from 'react';
import NavigationBar from '../Component/Section/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Section/Footer/Footer';

const Chef_bio = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet />
            <Footer></Footer>
        </div>
    );
};

export default Chef_bio;