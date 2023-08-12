import React from 'react'
import Lower from './Lower';


let MarketPlaceSideBar=()=>{
    return (
        <>
                <div className='watchsideBar'>
                    <div className='Sideheading'>
                        <h2 className='sHead'>MarketPlace</h2>
                        <img src='./settings.png' alt='sett' className='headIcon'/>
                    </div>
                    <div className='Searcher'>
                        <input type='text' placeholder='Search MarketPlace' className='searcherIN'/>
                    </div>
                    <div className='sepe'>
                        <h4>Filters</h4>
                        <h4>Rawalpindi, Pakistan</h4>
                    </div>
                    <div className='lowerClass'>
                        <Lower/>
                    </div>
                    
                </div>
        </>
    )
}

export default MarketPlaceSideBar;