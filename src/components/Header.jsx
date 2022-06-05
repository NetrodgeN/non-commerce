import React from 'react';
import home from "../assets/home.png"
const Header = () => {
    return (
        <header className='header'>
            <a href="#"><img src={home} alt="home" className='home'/></a>
        </header>
    );
};

export default Header;