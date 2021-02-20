import React from 'react'
import '../styles/SidebarOptions.css'

 function SidebarOption({text, Icon}) {
    return (
        <div className="sidebar-options">
            <Icon />
            <h2>{text}</h2>
        </div>
    )
}

export default SidebarOption
