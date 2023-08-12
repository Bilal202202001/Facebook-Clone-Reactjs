import React from "react";
import SponserData from './SponserData';

let dataMapper = (val)=>{
    return(
        <>
            <div className="singleSpons">
            <div className="pic">
            <img src={val.srcImages} className='picImgs' alt="noMan"/>
            </div>
            <div className="headings">
                <h2>{val.h1}</h2>
                <h2>{val.h2}</h2>
            </div>
            </div>
        </>
    )
}

let Sponsers = ()=>{
    return(
        <>
            {SponserData.map(dataMapper)}
        </>
    )
}

export default Sponsers;