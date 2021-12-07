import {Outlet} from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import React from 'react'


const Layout = () => {



    return (
        <div className="bg-dark">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;