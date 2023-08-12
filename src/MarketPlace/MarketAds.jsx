import React from 'react'
import MarketAdsData from './MarketAdsData';

let DataMerger =(val)=>{
    return (
        <>
                <div className='Ads'>
                    <img src={val.imgIn} alt='noPic' className='AdPic'/>
                    <h3 className='AdName'>{val.heading}</h3>
                </div>
        </>
    )
}
let MarketAds=()=>{
    return(
        <>
            <div className='singleAds'>
            {MarketAdsData.map(DataMerger)}
            </div>
        </>
    )
}

export default MarketAds;