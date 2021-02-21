import React from 'react';
import {NavLink} from 'react-router-dom'
import '../styles/Sidebar.css'
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOption from '../subComponents/SidebarOption.js'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import MailOutlineIcon from '@material-ui/icons/MailOutlineOutlined'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import ListAltIcon from '@material-ui/icons/ListAlt'
import PermIdentityIcon from '@material-ui/icons/PermIdentity'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { Button } from '@material-ui/core'

function Sidebar() {
    return (
      <div className="sidebar">
       
          <TwitterIcon className="main-icon" />
          <NavLink exact to="/" activeClassName="selected" style={{ textDecoration: 'none' }}>
          <SidebarOption 
              Icon = {HomeIcon}
              text = "Home"  
           />
           </NavLink>
           <NavLink exact to="/explore" activeClassName="selected" style={{ textDecoration: 'none' }}>
           <SidebarOption 
              Icon = {SearchIcon}
              text = "Explore"  
           />
           </NavLink>
           <NavLink exact to= "/notifications" activeClassName="selected" style={{ textDecoration: 'none' }}>
           <SidebarOption 
              Icon = {NotificationsNoneIcon}
              text = "Notifications"  
           />
           </NavLink>
           <NavLink exact to= "/messages" activeClassName="selected" style={{ textDecoration: 'none' }}>
           <SidebarOption 
              Icon = {MailOutlineIcon}
              text = "Message"  
           />
           </NavLink>
           <NavLink exact to= "/notyet" activeClassName="selected" style={{ textDecoration: 'none' }}>
           <SidebarOption 
              Icon = {BookmarkBorderIcon}
              text = "Bookmarks"  
           />
           </NavLink>
           <NavLink exact to= "/notyet" activeClassName="selected" style={{ textDecoration: 'none' }}>
           <SidebarOption
              Icon = {ListAltIcon} 
              text = "Lists"  
           />
           </NavLink>
           <NavLink exact to= "/settings" activeClassName="selected" style={{ textDecoration: 'none' }}>
           <SidebarOption 
              Icon = {PermIdentityIcon}
              text = "Profile"  
           />
           </NavLink>
           <NavLink exact to= "/notyet" activeClassName="selected" style={{ textDecoration: 'none' }}>
           <SidebarOption 
              Icon = {MoreHorizIcon}
              text = "More"  
           />
           </NavLink>
           <Button className="sidebar-btn"
           variant="outlined">Tweet</Button>
       

      </div>
    );
  }
  
  export default Sidebar