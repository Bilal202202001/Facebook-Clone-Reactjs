import React from 'react';
import { Link } from 'react-router-dom';
import CentralIconData from './CentralIconData';

let iconMap = (val)=>{
    return(
        <span className={val.classes} id={val.idName}>
                    <Link to={val.LinkADD}>
                    {val.content}
                    </Link>
                </span>
    )
}

let CentralIcons = ()=>{
    return(
        <>
            {CentralIconData.map(iconMap)}
        </>
    )
};

export default CentralIcons;