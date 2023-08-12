import React from 'react';
import './SideBar.css';
import SideBarData from './SideBarData';
import SideLowerBarData from './SideLowerBarData';
import {SideEndNavData1,SideEndNavData2} from './SideEndNavData';

let DataMapper = (val) => {
    return (
        <>
            <div className='contents'>
                <img className='sImgs' src={val.icon} alt='imageIcons' />
                <h2 className='sname' >{val.content}</h2>
            </div>
        </>
    )
}
let DataLowerMapper = (val) => {
    return (
        <>
            <div className='contents'>
                <img className='sImgs' src={val.icon} alt='imageIcons' />
                <h2 className='sname' >{val.content}</h2>
            </div>
        </>
    )
}
let DataNavMapper = (val) => {
    return (
        <>
            <a href='/' className='refs'>{val.content}</a>
        </>
    )
}

let SideBar = () => {
    return (
        <>
        <div className='sider'>
        <div className='sideBar'>
            {SideBarData.map(DataMapper)}
        </div>
        <h3 id='short'>Your Shortcuts</h3>
        <div className='sideBar'>
            {SideLowerBarData.map(DataLowerMapper)}
        </div>
        <div className='sideBar sideEndNav'>
        {SideEndNavData1.map(DataNavMapper)}
        </div>
        <div className='sideBar sideEndNav'>
        {SideEndNavData2.map(DataNavMapper)}
        </div>
        </div>
        </>
    )
};

export default SideBar;