import { Checkbox, IconButton } from "@material-ui/core"
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"
import React, { useEffect, useState } from "react"
import EmailRow from "./EmailRow"
import '../styles/emailList.css'
import Section from "./Section"
import RedoIcon from "@material-ui/icons/Redo"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide"
import SettingIcon from "@material-ui/icons/Settings"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import InboxIcon from "@material-ui/icons/Inbox"
import PeopleIcon from "@material-ui/icons/People"
import LocalOfferIcon from "@material-ui/icons/LocalOffer"
import { db } from "../firebase"
import { collection, getDocs } from "firebase/firestore"


function EmailList() {

    const [emails, setEmails] = useState([])
    const onSnapshot = getDocs(collection(db, "Emails"))

    useEffect(() => {
    onSnapshot.then((snapshot) => {
        setEmails(
        snapshot?.docs.map((doc) => (
            {
                id: doc.id,
                data: doc.data()
            }
        )))
    })
}, [])


    return (
        <div className="email-list">
            <div className="email-list-settings">
                <div className="email-list-settings-left">
                    <Checkbox />

                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>

                    <IconButton>
                        <RedoIcon />
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>

                <div className="email-list-setting-right">
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>

                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>

                    <IconButton>
                        <KeyboardHideIcon />
                    </IconButton>
                    
                    <IconButton>
                        <SettingIcon />
                    </IconButton>
                </div>
            </div>

            <div className="email-list-sections">
                <Section Icon={InboxIcon} title='Primary' color='red' selected={true} />
                <Section Icon={PeopleIcon} title='Social' color='#1A73E8' selected={false} />
                <Section Icon={LocalOfferIcon} title='Promotions' color='green' />
            </div>

            <div className="email-list-list">
                {console.log(emails)}

                {emails.map(({ id, data: {subject, message, time}}) => {
                    <p>id </p>;
                    <EmailRow 
                    id= {id}
                    key={id}
                    title= {subject} 
                    subject= {subject} 
                    description= {message}
                    time= {time}
                    />
                })}

                {/* <EmailRow 
                id='1'
                title='title 1' 
                subject='subject 1' 
                description='describ 1' 
                time='time 1'
                />

                <EmailRow 
                id='2'
                title='title 2' 
                subject='subject 2' 
                description='describ 2' 
                time='time 2'
                />

                <EmailRow 
                id='3'
                title='title 3' 
                subject='subject 3' 
                description='describ 3' 
                time='time 3'
                />
                
                <EmailRow 
                id='4'
                title='title 4' 
                subject='subject 4' 
                description='describ 4'  
                time='time 4'
                /> */}
              
            </div>
        </div>
    )
}
export default EmailList