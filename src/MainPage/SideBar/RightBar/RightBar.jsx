import React from 'react';
import { Link } from 'react-router-dom';
import Friends from './Friends';
import './RightBar.css';
import Sponsers from './Sponsers';

let RightBar = ()=>{
    return(
        <>
            <div className='rightBar'>
                <div className='head'>
                    <h2 className='heading'>Sponsers</h2>
                </div>
                <div className='allsponsers'>
                    <Sponsers/>
                </div>
                <div className='friendList'>
                    <Friends/>
                </div>
                <div className='buttonLog'>
                    <button className='btnLog'><Link className='Linker' to='/'>Log out</Link></button>
                </div>
            </div>
        </>
    )
};

export default RightBar;