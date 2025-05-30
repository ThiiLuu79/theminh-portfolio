import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import tm_logo_white from '../../../img/home/TM-white-no-bg.png';
import GoToTop from '../GoToTop/GoToTop';
import GoBack from '../GoBack/GoBack';
import { LanguageToggler } from '../../ReusableComponents/LanguageToggler/LanguageToggler';

const Header = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    return (
        <header id="top">
            <LanguageToggler/>
            <Navbar/>
            <img src={tm_logo_white} alt="header" className="tm_logo" />
            <GoToTop/>
            {!isHomePage && <GoBack/>}
        </header>
    )
}

export default Header;
