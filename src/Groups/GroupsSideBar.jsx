import React from 'react'
import GroupLower from './GroupLower';



let GroupsSideBar=()=>{
    return (
        <>
                <div className='watchsideBar'>
                    <div className='Sideheading'>
                        <h2 className='sHead'>Groups</h2>
                        <img src='./settings.png' alt='sett' className='headIcon'/>
                    </div>
                    <div className='Searcher'>
                        <input type='text' placeholder='Search Groups' className='searcherIN'/>
                    </div>
                    <div className='lowerClass'>
                        <GroupLower/>
                    </div>
                    
                </div>
        </>
    )
}

export default GroupsSideBar;