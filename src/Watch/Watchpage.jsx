import React from 'react'
import './WatchPage.css';
import Header from '../MainPage/Header/Header';
import WatchSideBar from './WatchSideBar';
import WatchMiddlePage from './WatchMiddlePage';

let Watchpage = () => {
    return (
        <>
                <Header/>
                <div className='Watchpage'>
                <WatchSideBar/>
                <div className='pagePosts'>
                <WatchMiddlePage/>
                </div>
                </div>
        </>
    );
}

export default Watchpage;