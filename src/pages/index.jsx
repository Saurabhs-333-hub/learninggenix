import React, { useState } from 'react'
// import { app } from './firebaseConfig'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();
const Index = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailsignIn, setEmailsignIn] = useState('')
    const [passwordsignIn, setPasswordsignIn] = useState('')
    // const [data, setData] = useState('')
    const handleSubmit = () => {
        createUserWithEmailAndPassword(auth, email, password).then((res) => {
            console.log(res)
            { localStorage.setItem('user', res.user.email) }
            // setData(res.user.email)
        }).catch((err) => {
            console.log(err)
        })
    }
    const handleSignin = () => {
        signInWithEmailAndPassword(auth, email, password).then((res) => {
            console.log(res)
            { localStorage.setItem('user', res.user.email) }
            // setData(res.user.email)
            window.location.reload()
            window.location.assign('/profile')
        }).catch((err) => {
            console.log(err)
        })
    }
    return (
        <div>
            <input autoFocus type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
            <div>
                {localStorage.getItem('user')}
                SignInSuccessfull
            </div>
            <button onClick={handleSubmit}>SignUp</button>
            <button onClick={handleSignin}>SignIn</button>
            <input autoFocus type="text" value={emailsignIn} onChange={(e) => setEmailsignIn(e.target.value)} />
            <input type="text" value={passwordsignIn} onChange={(e) => setPasswordsignIn(e.target.value)} />
            {/* <button onClick={handleSignOut}>SignOut</button> */}
        </div>
    )
}

export default Index