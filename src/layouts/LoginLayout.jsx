import React from 'react';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import Chef from '../pages/chef-details/Chef-view/Chef';

const LoginLayout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Header></Header>
            <Chef></Chef>
            <Footer></Footer>
        </div>
    );
};

export default LoginLayout;