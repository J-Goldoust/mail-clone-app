import React from "react";
import '../styles/sendMail.css'
import CloseIcon from '@material-ui/icons/Close'
import { Button } from "@material-ui/core"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { closeSendMessage } from "../features/mailSlice"
import { db } from "../firebase"
import { serverTimestamp, addDoc, collection } from "firebase/firestore";

function SendMail() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const dispatch = useDispatch()

    const onSubmit = (formData) => {
        console.log(formData)
        addDoc(collection(db, "Emails"), {
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            time: serverTimestamp(),
        })
        dispatch(closeSendMessage())
    }

    return (
        <div className="send-mail">
            <div className="send-mail-header">
                <h3>Send Message</h3>

                <CloseIcon className='send-mail-close' onClick={() => dispatch(closeSendMessage())} />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>

                <input 
                type='email' 
                name='to' 
                placeholder="To" 
                autocomplete="off"
                {...register("to", { required: true })}
                />
                {errors.to && <p className="send-mail-error">This field is required</p>}

                <input 
                type='text'
                name='subject' 
                placeholder="Subject"
                autocomplete="off"
                {...register("subject", { required: true })}
                />
                {errors.subject && <p className="send-mail-error">This field is required</p>}

                <textarea 
                className='send-mail-message' 
                name='message' 
                placeholder="Message..." 
                {...register("message", { required: true })}
                />
                {errors.message && <p className="send-mail-error">This field is required</p>}

                <div className="send-mail-options">
                    <Button 
                        className='send-mail-button'
                        variant="contained"
                        color='primary'
                        type='submit'
                    >Send
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail