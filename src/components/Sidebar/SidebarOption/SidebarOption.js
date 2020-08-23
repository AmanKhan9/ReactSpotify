import React from 'react';
import './SidebarOption.css';
import { Icon } from '@material-ui/core';

function SidebarOption(props) {
    const Icon = props.Icon;
    return (
        <div className="sidebarOption">
            {Icon && <Icon className="sidebarOption__icon"/>}
            {Icon?<h4>{props.title}</h4> : <p>{props.title}</p>}
        </div>
    )
}

export default SidebarOption
