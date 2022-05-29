import { IconButton } from "@material-ui/core"
import React from "react";
import '../styles/mail.css'
import { useNavigate } from 'react-router-dom'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox'
import ErrorIcon from '@material-ui/icons/Error'
import DeleteIcon from '@material-ui/icons/Delete'
import EmailIcon from '@material-ui/icons/Email'
import WatchLaterIcon from '@material-ui/icons/WatchLater'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import LabelImportantIcon from '@material-ui/icons/LabelImportantRounded'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide"
import { selectMail } from "../features/mailSlice"
import { useSelector } from 'react-redux'

function Mail() {

    const navigate = useNavigate()
    const selectedMail = useSelector(selectMail)

    const backToMailList = () => {
        navigate('/')
    }

    return (
        <div className="mail">
            <div className="mail-tools">
                <div className="mail-tools-left">
                    <IconButton onClick={backToMailList}>
                        <ArrowBackIcon />
                    </IconButton>

                    <IconButton>
                        <MoveToInboxIcon />
                    </IconButton>

                    <IconButton>
                        <ErrorIcon />
                    </IconButton>

                    <IconButton>
                        <DeleteIcon />
                    </IconButton>

                    <IconButton>
                        <EmailIcon />
                    </IconButton>

                    <IconButton>
                        <WatchLaterIcon />
                    </IconButton>

                    <IconButton>
                        <CheckCircleIcon />
                    </IconButton>

                    <IconButton>
                        <LabelImportantIcon />
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>

                <div className="mail-tools-right">
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>

                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>

                    <IconButton>
                        <KeyboardHideIcon />
                    </IconButton>
                </div>
            </div>

            <div className="mail-body">
                <div className="mail-body-header">
                    <h2>{selectedMail.subject}</h2>
{console.log(selectedMail)}
                    <LabelImportantIcon className="mail-important" />

                    <p>{selectedMail.title}</p>
                    <p className="mail-time">{selectedMail.time}</p>
                </div>

                <div className="mail-message">
                    <p>{selectedMail.description}</p>

                </div>
            </div>
        </div>
    )
}
export default Mail