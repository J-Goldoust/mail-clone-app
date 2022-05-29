import { Button, IconButton } from "@material-ui/core";
import React from "react";
import '../styles/sidebar.css'
import SidebarOption from "./SidebarOption";
import InboxIcon from '@material-ui/icons/Inbox'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import LabelImportantIcon from '@material-ui/icons/LabelImportant'
import NearMeIcon from '@material-ui/icons/NearMe'
import NoteIcon from '@material-ui/icons/Note'
import StarIcon from '@material-ui/icons/Star'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import PersonIcon from '@material-ui/icons/Person'
import DuoIcon from '@material-ui/icons/Duo'
import PhoneIcon from '@material-ui/icons/Phone'
import { useDispatch } from "react-redux";
import { openSendMessage } from "../features/mailSlice";


function Sidebar() {

    const dispatch = useDispatch()

    return (
        <div className="sidebar">
             <Button className="sidebar-compose-btn" onClick={() => dispatch(openSendMessage())}>
                 <img className="plus-icon" src='/images/plus-icon.jpg' />
                 Compose
             </Button>

             <SidebarOption Icon={InboxIcon} title='Inbox' number={54} selected={true} />

             <SidebarOption Icon={StarIcon} title='Starred' number={54} />

             <SidebarOption Icon={AccessTimeIcon} title='Snoozed' number={54} />

             <SidebarOption Icon={LabelImportantIcon} title='Important' number={54} />

             <SidebarOption Icon={NearMeIcon} title='Send' number={54} />

             <SidebarOption Icon={NoteIcon} title='Drafts' number={54} />

             <SidebarOption Icon={ExpandMoreIcon} title='More' number={54} />

             <div className="sidebar-footer">
                <div className="sidebar-footer-icons">
                    <IconButton>
                        <PersonIcon />
                    </IconButton>
                    <IconButton>
                        <DuoIcon />
                    </IconButton>
                    <IconButton>
                        <PhoneIcon />
                    </IconButton>
                </div>
             </div>

        </div>
    )
}

export default Sidebar