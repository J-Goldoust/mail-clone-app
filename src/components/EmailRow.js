import { Checkbox, IconButton } from "@material-ui/core";
import React from "react";
import '../styles/emailRow.css'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { selectMail } from "../features/mailSlice";

function EmailRow({ id, title, subject, description, time }) {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const navigateToMail = () => {
        navigate('/mail')
    }

    const openMail = () => {
        dispatch(selectMail({
            id,
            title, 
            subject, 
            description, 
            time
        }))
    }

    return (
        <div className="email-row">

            <div className="email-row-options">
                <Checkbox />
                <IconButton>
                    <StarBorderOutlinedIcon />
                </IconButton>
            </div>

            <h3 className="email-row-title" onClick={() => { openMail(); navigateToMail();}}>{title}</h3>

            <div className="email-row-message" onClick={() => { openMail(); navigateToMail();}}>
                <h4>{subject}
                    <span className="email-row-description"> - {description}</span> 
                </h4>
            </div>

            <p className="email-row-time">{time}</p>

        </div>
    )
}

export default EmailRow