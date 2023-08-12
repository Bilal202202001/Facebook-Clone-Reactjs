import React from 'react'
import './Groups.css';
import Header from '../MainPage/Header/Header';
import SideBar from '../MainPage/SideBar/SideBar';
import GroupsSideBar from './GroupsSideBar';
import MiddleGroup from './MiddleGroup';
import RealPosts from '../MainPage/Posts/RealPosts';

let Groups = () => {
    return (
        <>
                <Header/>
                <div className='Groups'>
                <GroupsSideBar/>
                <div className='postIngroup'>
                    <RealPosts/>
                </div>
                </div>
        </>
    );
}

export default Groups;