import React from 'react';
import './App.css';
import {link} from 'react-router-dom';

function Nav() {
    const style = {
        color: 'white'
    };


    return (
        <nav class = "Nav">
            <h3>Logo</h3>
            <ul className = "nav-links">
                <Link style={navStyle} to=' /about'>
                <li>About</li>
                </Link>
                <Link style={navStyle} to= '/shop'>
                <li>Shop</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
