import React from 'react'
import GamingLower from './GamingLower';



let GamingSideBar=()=>{
    return (
        <>
                <div className='watchsideBar'>
                    <div className='Sideheading'>
                        <h2 className='sHead'>Gaming</h2>
                        <img src='./settings.png' alt='sett' className='headIcon'/>
                    </div>
                    <div className='Searcher'>
                        <input type='text' placeholder='Search Games' className='searcherIN'/>
                    </div>
                    <div className='lowerClass'>
                        <h5>Recently Played</h5>
                        <GamingLower/>
                    </div>
                    
                </div>
        </>
    )
}

export default GamingSideBar;