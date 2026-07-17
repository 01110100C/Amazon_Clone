import React from 'react';
import './Header.css';
import { FaSearchDollar } from 'react-icons/fa';

function Header() {
    return (
        <div className="header">

            {/* Logo */}

            <img 
            className='header__logo' 
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt='Amazon Logo'
            />

            {/* Search Bar */}

            <div className='header__search'>
                <input type='text' className='header__searchInput' />
                <FaSearchDollar
                     alt='Search Icon' 
                     className='header__searchIcon' 
                />
            </div>

            {/* Navigation Links */}

            <div className='header__nav'>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Hello Guest</span>
                    <span className='header__optionLineTwo'>Sign In</span>
                </div>

                <div className='header__option'>
                    <span className='header__optionLineOne'>Returns</span>
                    <span className='header__optionLineTwo'>& Orders</span>
                </div>

                <div className='header__option'>
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLineTwo'>Prime</span>
                </div>
        </div>
    </div>
    );
}

export default Header;