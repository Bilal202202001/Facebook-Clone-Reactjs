import React from 'react'
import Header from './Header/Header';
import './MainPage.css';
import Posts from './Posts/Posts';
import RightBar from './SideBar/RightBar/RightBar';
import SideBar from './SideBar/SideBar';

let MainPage = () => {
    return (
        <>
                <Header />
                <div className='MainPage'>
                <SideBar />
                <Posts />
                <RightBar/>
                </div>
        </>
    );
}

export default MainPage;