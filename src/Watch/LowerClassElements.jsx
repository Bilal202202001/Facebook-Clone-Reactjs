import React from 'react'
import LowerClassElementData from './LowerClassElementData';

let DataMerger =(val)=>{
    return (
        <>
                <div className='LowerClassElements'>
                    <img src={val.imgIn} alt='noPic' className='iconSet2'/>
                    <h3 className='lHeading'>{val.heading}</h3>
                </div>
        </>
    )
}
let LowerClassElements=()=>{
    return(
        <>
            {LowerClassElementData.map(DataMerger)}
        </>
    )
}

export default LowerClassElements;