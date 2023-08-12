import React from "react";
import FriendsData from './FriendsData';

let dataMapper = (val)=>{
    return(
        <>
            <div className="singleFriend">
            <img src={val.srcImages} className='friendImgs' alt="noMan"/>
                <h2 className="friendName">{val.name}</h2>
            </div>
        </>
    )
}

let Friends = ()=>{
    return(
        <>
            {FriendsData.map(dataMapper)}
        </>
    )
}

export default Friends;