import React from 'react';
import StoriesData from './StoriesData';
import { Link, OutLet } from 'react-router-dom';
import './Posts.css';

let dataMerger = (val) => {
    return (
        <>
            <div className='singleStory'>
                <div className='imageBox'>
                <img src={val.icon} alt='pimg' className='SiconImgs' />
                </div>
                <div className='nameBox'>
                <Link to={val.linker} className='SiconHead'>{val.content}</Link>
                </div>
            </div>

        </>
    )
}

let Stories = () => {
    return (
        <>
            <div className='stories'>
                {StoriesData.map(dataMerger)}
            </div>
        </>
    )
}

export default Stories;
