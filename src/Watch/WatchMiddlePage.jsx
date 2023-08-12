import React from 'react';
import Reaction from '../MainPage/Posts/Reaction';
import './WatchMiddlePage.css'
import WatchMiddlePageData from './WatchMiddlePageData';

let dataMerger = (val) => {
    return (
        <>
            <div className='watchPostdata'>
                <div className='WRealPosts'>
                    <div className='Wprofile'>
                        <img src={val.source} alt='noPic' className='WprofilePic' />
                    </div>
                    <div className='Winfo'>
                        <h3 className='WnameId'>{val.nameId}</h3>
                        <h3 className='Wtime'>{val.time}</h3>
                    </div>
                    <div className='Wicon'>
                        <img src={val.iconsource1} alt='noPic' className='piconImgs' />
                    </div>
                </div>
                <div className='Wpostes'>
                    <video controls className='video'>
                        <source src={val.pic} type="video/mp4"/>
                    </video>
                </div>
                <div className='Wreactions'>
                    <Reaction />
                </div>
            </div>
        </>
    )
}
let WatchMiddlePage = () => {
    return (
        <>

            {WatchMiddlePageData.map(dataMerger)}


        </>
    )
}

export default WatchMiddlePage;