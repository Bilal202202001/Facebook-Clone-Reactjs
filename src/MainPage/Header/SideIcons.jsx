import React from 'react'
import SideIconData from './SideIconData';

let iconMap = (val)=>{
    return(
        <span className={val.classes}>
                    <a href='/'>
                    {val.content}
                    </a>
                </span>
    )
}

let SideIcons = ()=>{
    return(
        <>
            {SideIconData.map(iconMap)}
        </>
    )
};

export default SideIcons;