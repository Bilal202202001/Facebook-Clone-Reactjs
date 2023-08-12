import React from 'react'
import './MarketPlace.css';
import Header from '../MainPage/Header/Header';
import MarketPlaceSideBar from './MarketPlaceSideBar';
import MarketAds from './MarketAds';

let MarketPlace = () => {
    return (
        <>
                <Header/>
                <div className='MarketPlace'>
                <MarketPlaceSideBar/>
                <div className='adsPortion'>
                <MarketAds/>
                <MarketAds/>
                </div>
                </div>
        </>
    );
}

export default MarketPlace;