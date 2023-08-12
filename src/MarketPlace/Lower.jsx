import React from 'react'
import LowerData from './LowerData';

let DataMerger =(val)=>{
    return (
        <>
                <div className='LowerClassElements custom'>
                    <img src={val.imgIn} alt='noPic' className='iconSet2 iconSet3'/>
                    <h3 className='lHeading custHead'>{val.heading}</h3>
                </div>
        </>
    )
}
let Lower=()=>{
    return(
        <>
            {LowerData.map(DataMerger)}
        </>
    )
}

export default Lower;