import React from 'react'
import LowerClassElements from './LowerClassElements';

let WatchSideBar=()=>{
    return (
        <>
                <div className='watchsideBar'>
                    <div className='Sideheading'>
                        <h2 className='sHead'>Watch</h2>
                        <img src='./settings.png' alt='sett' className='headIcon'/>
                    </div>
                    <div className='Searcher'>
                        <input type='text' placeholder='Search Video' className='searcherIN'/>
                    </div>
                    <div className='lowerClass'>
                        <LowerClassElements/>
                    </div>
                </div>
        </>
    )
}

export default WatchSideBar;