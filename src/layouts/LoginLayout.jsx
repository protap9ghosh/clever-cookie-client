import React from 'react';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import Login from '../pages/Login/Login/Login';
import Register from '../pages/Login/Register/Register';
import Chef from '../pages/chef-details/Chef-view/Chef';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Header></Header>
            <Chef></Chef>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default LoginLayout;