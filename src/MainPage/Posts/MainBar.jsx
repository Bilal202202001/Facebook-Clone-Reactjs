import React from 'react';
import MainBarData from './MainBarData';
import { Link, OutLet } from 'react-router-dom';
import './Posts.css';

let dataMerger = (val) => {
    return (
        <>
            <div className='singleItem'>
                <img src={val.icon} alt='pimg' className='iconImgs' />
                <Link to={val.linker} className='iconHead'>{val.content}</Link>
            </div>

        </>
    )
}

let MainBar = () => {
    return (
        <>
            <div className='mainBar'>
                {MainBarData.map(dataMerger)}
            </div>
        </>
    )
}
let MainBarForPost = () => {
    return (
        <>
            <div className='mainBar'>
                {MainBarData.map(dataMerger)}
            </div>
        </>
    )
}

export  default MainBar;
