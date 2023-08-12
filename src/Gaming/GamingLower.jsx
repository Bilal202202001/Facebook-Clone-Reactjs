import React from 'react'
import GamingLowerData from './GamingLowerData';

let DataMerger =(val)=>{
    return (
        <>
                <div className='GroupEach'>
                    <img src={val.imgIn} alt='noPic' className='groupIcon'/>
                    <div className='details'>
                    <h3 className='details1'>{val.heading}</h3>
                    <h3 className='details2'>{val.heading2}</h3>
                    </div>
                </div>
        </>
    )
}
let GamingLower=()=>{
    return(
        <>
            {GamingLowerData.map(DataMerger)}
        </>
    )
}

export default GamingLower;