import { Button } from "@material-ui/core"
import React, { useState } from "react"
import '../styles/signup.css'
import { 
    signInWithPopup, 
    GoogleAuthProvider, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "firebase/auth"
import { auth } from '../firebase'
import { useDispatch } from "react-redux"
import { login } from '../features/userSlice'
import { useNavigate } from "react-router-dom"


function Signup() {

    const provider = new GoogleAuthProvider()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [emailValue, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signup = () => {
        signInWithPopup(auth, provider)
        .then(({ user }) => {
            console.log(user)
            dispatch(login({
                displayName: user.displayName,
                email: user.email,
                photoUrl: user.photoURL,

            }))
        })
        .catch(error => {alert(error.message)})
        navigate('/')
    }

    const signupWithEmailAndPassword = () => {
        createUserWithEmailAndPassword(auth, emailValue, password)
        .then(({ user }) => {
            dispatch(login({
                displayName: user.email,
                email: user.email,
                photoUrl: user.photoURL,

            }))
        })
        .catch(error => {alert(error.message)})
        navigate('/')
    }

    const logInWithEmailAndPassword = () => {
        signInWithEmailAndPassword(auth, emailValue, password)
        .then(({ user }) => {
            dispatch(login({
                displayName: user.displayName,
                email: user.email,
                photoUrl: user.photoURL,

            }))
        })
        .catch(error => {alert(error.message)})
        navigate('/')
    }

    return ( 
        <div className="signup">
            <div className="signup-container">
                <img src="/images/gmail-login.png" alt="gmail-logo" /> 
                <h3>Login to your account or Create an account<br/>to continue to G-Clone</h3>

                <label className="label" >Email:</label>
                <input 
                    className="input" 
                    type='email'
                    value={emailValue} 
                    onChange={e => setEmail(e.target.value)}
                    required
                />

                <label className="label" >Password:</label>
                <input 
                    className="input" 
                    type='password' 
                    value={password} 
                    onChange={e => setPassword(e.target.value)}
                    required
                />

                <div className="login-btns">
                    <Button 
                        variant='contained' 
                        color='primary' 
                        onClick={logInWithEmailAndPassword}>Login
                    </Button>

                    <Button 
                        variant='contained' 
                        color='primary' 
                        onClick={signupWithEmailAndPassword}>Sign Up
                    </Button>
                </div>

                <p className="or">-- or --</p> 

                <Button variant='contained' onClick={signup}>
                    <img className="google-logo" src='/images/google.svg' alt='google' />
                    Continue With Google
                </Button>
            </div>
        </div>
    )
}

export default Signup