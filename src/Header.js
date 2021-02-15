import React from "react";
import { Avatar } from "@material-ui/core";
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className="header-left">
                <img className="header-left-logo" src="https://minigao.files.wordpress.com/2021/02/coder-icon.png" alt="brand-logo"/>
                <h2>Following</h2>
                <h2>Browse</h2>
                <div className="header-separator"></div>
                <h2>Esport</h2>
                <h2>Music</h2>
                <i className="fas fa-ellipsis-h"></i>
            </div>

            <div className="header-center">
                <input type="text" placeholder='Search' />
                <div className="header-center-logo">
                    <i className="fas fa-search"></i>
                </div>
            </div>

            <div className="header-right">
                <div className="header-right-container">
                    <i className="fas fa-crown"></i>
                    <i className="fas fa-inbox"></i>
                    <i className="fas fa-comment-alt"></i>

                    <div className="header-right-bits">
                        <i className="fas fa-gem"></i>
                        <h4>Get Bits</h4>
                    </div>

                    <Avatar />
                </div>
            </div>
        </div>
    )
}

export default Header