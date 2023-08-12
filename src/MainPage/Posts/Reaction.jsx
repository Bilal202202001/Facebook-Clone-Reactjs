import React from 'react';
import ReactionData from './ReactionData';

let dataMerger = (val)=>{
    return(
        <>
            <div className='indiviReac'>
            <img src={val.imgSrc} className='reacImg' alt='nomore'/>
            <h3 className='reacHead' >{val.name}</h3>
            </div>
        </>
    )
};
let Reaction = ()=>{
    return(
        <>
            {ReactionData.map(dataMerger)}
        </>
    )
}
export default Reaction; 