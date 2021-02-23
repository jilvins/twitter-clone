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
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import SettingsIcon from '@material-ui/icons/Settings';
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';

const useStyles = makeStyles((theme) => ({
   paper: {
     border: '1px solid',
     padding: theme.spacing(1),
     backgroundColor: theme.palette.background.paper,
     color: '#000000',
   },
 }));



function Sidebar() {
   const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;


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
           <NavLink exact to= "/settings" activeClassName="selected" style={{ textDecoration: 'none' }}>
           <SidebarOption 
              Icon = {SettingsIcon}
              text = "Settings"  
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
           <NavLink exact to= "/notyet" activeClassName="selected" style={{ textDecoration: 'none' }}>
           <SidebarOption 
              Icon = {MoreHorizIcon}
              text = "More"  
           />
           </NavLink>


  
           <Button className="sidebar-btn"
           variant="outlined"
           aria-describedby={id}
           onClick={handleClick}>Tweet</Button>

      <Popper id={id} open={open} anchorEl={anchorEl}>
        <div className={classes.paper}>Choose Tweet option at the top of the page</div>
      </Popper>
       

      </div>
    );
  }
  
  export default Sidebar