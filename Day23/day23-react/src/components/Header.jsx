import React from 'react';
import './index.css'
import Menu from "./Menu.jsx";

function Header(props) {
    return (
        <>
            <div className="header">
                <span className="logo-text">EDIYA COFFEE</span>
            </div>
            <Menu />
        </>
    );
}

export default Header;
