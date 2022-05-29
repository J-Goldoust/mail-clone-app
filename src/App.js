import React, { useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import EmailList from './components/EmailList'
import Mail from './components/Mail'
import SendMail from './components/SendMail'
import Signup from './components/Signup'
import { selectSendMessageIsOpen } from './features/mailSlice'
import { login, logout, selectUser } from './features/userSlice'
import { onAuthStateChanged } from "firebase/auth"
import { auth } from './firebase'


function App() {

  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
      }))
      } else {
        dispatch(logout)
      }
    })
  }, [])

  return (
    <Router>

        { !user ? <Signup /> :

        <div className="app">
          <Header />
          
          <div className='app-body'>
            <Sidebar />

            <Routes>
              <Route path='/' element={<EmailList />} />
              <Route path='/mail' element={<Mail />} />
            </Routes>
          </div>

          { sendMessageIsOpen && <SendMail />} 

        </div> 
      }
    </Router>
  );
}

export default App