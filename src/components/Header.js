import React from "react";
import "../styles/header.css"
import MenuIcon from '@material-ui/icons/Menu'
import { Avatar, IconButton } from "@material-ui/core"
import SearchIcon from '@material-ui/icons/Search'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'
import { signOut } from "firebase/auth"
import { auth } from '../firebase'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../features/userSlice' 

function Header() {

    const dispatch = useDispatch()
    const user = useSelector(selectUser)

    const signout = () => {
        
        signOut(auth).then(dispatch(logout()))
    }

    return (
        <div className="header">
            <div className="header-left">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img src="/images/gmail-logo.jpg" alt="gmail logo" />
            </div>

            <div className="header-middle">
                <SearchIcon />
                <input placeholder="Search Mail" type="text" />
                <ArrowDropDownIcon />
            </div>

            <div className="header-right">
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <Avatar onClick={signout} src={user.photouUrl} />
            </div>
        </div>
    )
}

export default Header