import React from 'react';
import './Nav.css' ;
import PropTypes from 'prop-types' ;
import searchicon from './img/icons/search.png';
import micicon from './img/icons/mic.png';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Navbar(props){
    return(
        <header id="header">
            <Link to="/"> 
            <img src={props.logo} className="logo" alt="logo" /> </Link>
            <div className="search-bar">
            <div>

                 <img src={searchicon}  className="search-ico" />

            </div>
            <input type="text" name="search" placeholder="Search"/>
            <div>
                
                <img src={micicon}  className="mic-ico" />

            </div>
        </div>
            <div id="profile">
                <button id="login"  >{props.name}</button>
            </div>
            <div>
                <ul id="navbar" className="no-list-style horizontal-list text-center">
                    <li >
                        <Link to="/" className="active"> Home </Link>
                    </li>
                    <li >
                        <Link to="#"> Shop </Link>
                    </li>
                    <li >
                        <Link to="#"> My Order </Link>
                    </li>
                    <li >
                        <Link to="#"> WishList </Link>
                    </li>
                    <li >
                        <Link to="#"> About </Link>
                    </li>
                    <li >
                        <Link to="#"> Contact us </Link>
                    </li>
                    <li >
                        <Link to="/cart"> <i className="fa-solid fa-cart-shopping"></i> Cart </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}



Navbar.propTypes = {
    name : PropTypes.string.isRequired
}

Navbar.defaultProps = {
    name : "Login"
}
export default Navbar ;