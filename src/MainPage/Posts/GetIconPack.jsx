import React from 'react';
import GetIconPackData from './GetIconPackData';
import { Link, OutLet } from 'react-router-dom';
import './Posts.css';

let dataMerger = (val) => {
    return (
        <>
            <div className='singleItem'>
                <img src={val.icon} alt='pimg' className='iconImgs iconImgs2' />
                <Link to={val.linker} className='iconHead'>{val.content}</Link>
            </div>

        </>
    )
}

let GetIconPack = () => {
    return (
        <>
            <div className='mainBar'>
                {GetIconPackData.map(dataMerger)}
            </div>
        </>
    )
}

export  default GetIconPack;
