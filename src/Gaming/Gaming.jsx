import React from 'react'
import './Gaming.css';
import Header from '../MainPage/Header/Header';
import GamingSideBar from './GamingSidebar';
import MarketAds from '../MarketPlace/MarketAds';

let Gaming = () => {
    return (
        <>
                <Header/>
                <div className='Gaming'>
                <GamingSideBar/>
                <div className='adsPortion'>
                <MarketAds/>
                <MarketAds/>
                </div>
                </div>
        </>
    );
}

export default Gaming;