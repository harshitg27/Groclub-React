import React from 'react';
import comlogo from './img/groclub.png';
import './Nav.css'
import searchicon from './img/icons/search.png';
import micicon from './img/icons/mic.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Navbar(){
    return(
        <header id="header">
            <a href="/"> <img src={comlogo} className="logo" alt="logo" /> </a>
            <div className="search-bar">
            <div>
                 {/* magnifying glass- search icon */}
                 <img src={searchicon}  className="search-ico" />
                {/* <i className="fas fa-search search-ico"></i>
                 */}
                 {/* <FontAwesomeIcon icon="fa-regular fa-magnifying-glass" /> */}
            </div>
            <input type="text" name="search" placeholder="Search"/>
            <div>
                {/*  mic icon */}
                <img src={micicon}  className="mic-ico" />
                {/* <i class="fas fa-microphone mic-ico"></i> */}
            </div>
        </div>
            <div id="profile">
                <button id="login"  >Login</button>
            </div>
            <div>
                <ul id="navbar" className="no-list-style horizontal-list text-center">
                    <li >
                        <a href="/" className="active"> Home </a>
                    </li>
                    <li >
                        <a href="#"> Shop </a>
                    </li>
                    <li >
                        <a href="#"> My Order </a>
                    </li>
                    <li >
                        <a href="#"> WishList </a>
                    </li>
                    <li >
                        <a href="#"> About </a>
                    </li>
                    <li >
                        <a href="#"> Contact us </a>
                    </li>
                    <li >
                        <a href="#cart"> <i className="fa-solid fa-cart-shopping"></i> Cart </a>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Navbar ;