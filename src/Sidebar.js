import React from "react";
import Channel from "./Channel";
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-top">
                <h5>FOLLOWED CHANNELS</h5>
                <Channel avatar="https://minigao.files.wordpress.com/2021/02/coder-icon.png" name="miniGao" followers="100k" />
                <Channel avatar="https://minigao.files.wordpress.com/2021/02/coder-icon.png" name="Coder Cat" followers="100k" />
                <h5>RECOMMENDED CHANNELS</h5>
                <Channel avatar="https://minigao.files.wordpress.com/2021/02/coder-icon.png" name="miniGao" followers="100k" />
                <Channel avatar="https://minigao.files.wordpress.com/2021/02/coder-icon.png" name="Coder Cat" followers="100k" />
                <p className="sidebar-top-showmore">Show More</p>
            </div>
            <div className="sidebar-bottom">
                <div className="sidebar-bottom-container">
                    <i className="fas fa-search"></i>
                    <input type="text" placeholder="Search to Add Friends" />
                </div>
            </div>
        </div>
    )
}

export default Sidebar