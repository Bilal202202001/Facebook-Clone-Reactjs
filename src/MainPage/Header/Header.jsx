import React from 'react'
import '../Header/Header.css';
import CentralIcons from './CenteralIcons';
import SideIcons from './SideIcons';

let Header = () => {
    return (
        <div id='navBar'>
            <div id='section1'>
                <img src='./favicon.png' alt='fav' id='logo' />
                <div id='searcher'>
                    <img src='./search.png' alt='search' id='search' />
                    <input type='text' placeholder='Search Facebook' id='searchtext' />
                </div>
            </div>
            <div id='section2'>
                <CentralIcons/>
            </div>
            <div id='section3'>
                <SideIcons/>
            </div>
        </div>
    )
}

export default Header