import React, { useState } from 'react'
import { app } from './firebaseConfig'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
const auth = getAuth();
const Index = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [data, setData] = useState('')
    const handleSubmit = () => {
        createUserWithEmailAndPassword(auth, email, password).then((res) => {
            console.log(res)
            setData(res.user.email)
        }).catch((err) => {
            console.log(err)
        })
    }
    const handleSignin = () => {
        signInWithEmailAndPassword(auth, email, password).then((res) => {
            console.log(res)
            { localStorage.setItem('user', res.user.email) }
            setData(res.user.email)
        }).catch((err) => {
            console.log(err)
        })
    }
    const handleSignOut = () => {
        signOut(auth.currentUser).then((res) => {
            { localStorage.removeItem('email', email) }
            console.log(res)
            setData(res.user.email)
        }).catch((err) => {
            console.log(err)
        })
    }
    return (
        <div>
            {/* <input autoFocus type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} /> */}
            <div>
                {localStorage.getItem('email')} SignInSuccessfull
            </div>
            <button onClick={handleSignin}>Submit</button>
            <input autoFocus type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSignOut}>SignOut</button>
        </div>
    )
}

export default Index