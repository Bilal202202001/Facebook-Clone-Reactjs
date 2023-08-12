import React from 'react';
import MainBar from './MainBar';
import Stories from './Stories';
import PostSome from './PostSome';
import RealPosts from './RealPosts';

let Posts = ()=>{
    return(
        <div className='PostsPortion'>
            <MainBar/>
            <Stories/>
            <PostSome/>
            <RealPosts/>
        </div>
    )
}

export default Posts;