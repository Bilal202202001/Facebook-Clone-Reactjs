import React from 'react';
import GetIconPack from './GetIconPack';
import {MainBarForPost} from './MainBar';

let PostSome = ()=>{
    return(
        <>
            <div className='PostSome'>
                <div className='what'>
                    <img src='./navicon2.jpg' alt='noPic' className='wiconImgs'/>
                    <input type='text' className='searchWhat' placeholder='Whats on you mind Muhammad?'/>
                </div>
                <div className='iconSet'>
                    <GetIconPack/>
                </div>
            </div>
        </>
    )
};

export default PostSome;