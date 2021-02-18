import React from 'react'
import '../styles/SidebarOptions.css'

 function SidebarOption({active, text, Icon}) {
    return (
        <div className={`sidebar-options ${active &&
        `sidebar-options--active`}`}>
            <Icon />
            <h2>{text}</h2>
        </div>
    )
}

export default SidebarOption
