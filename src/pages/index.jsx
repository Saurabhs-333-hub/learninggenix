import React, { useState } from 'react'
import { app } from './firebaseConfig'
import { toast, ToastContainer } from 'react-toastify'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
import 'react-toastify/dist/ReactToastify.css';
const auth = getAuth();
const Index = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailsignIn, setEmailsignIn] = useState('')
    const [passwordsignIn, setPasswordsignIn] = useState('')
    // const [data, setData] = useState('')
    const actionCodeSettings = {
        // URL you want to redirect back to. The domain (www.example.com) for this
        // URL must be in the authorized domains list in the Firebase Console.
        url: 'http://localhost:8000/',
        // This must be true.
        handleCodeInApp: true,
        iOS: {
            bundleId: 'com.learinggenix.ios'
        },
        android: {
            packageName: 'com.learinggenix.android',
            installApp: true,
            minimumVersion: '12'
        },
        // dynamicLinkDomain: 'http://localhost:8000/'
    };
    const handleSubmit = async () => {
        await createUserWithEmailAndPassword(auth, email, password).then((res) => {
            console.log(res)

            sendEmailVerification(auth.currentUser)
                .then((res) => {
                    console.log(res)
                    auth.currentUser.emailVerified === true ? toast.info("Refersh Website!", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    }) : toast.success("Email verification link sent! (Check Your Email)", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    })
                });
            // setData(res.user.email)
        }).catch((err) => {
            console.log(err)
        })
    }
    const handleSignin = () => {
        signInWithEmailAndPassword(auth, emailsignIn, passwordsignIn).then((res) => {
            console.log(res)
            { localStorage.setItem('user', res.user.email) }
            // setData(res.user.email)
            auth.currentUser.emailVerified === true ? window.location.assign('/profile') : toast.error("Email Not Verified!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })


        }).catch((err) => {
            console.log(err)
        })
    }

    const handlePasswordReset = () => {
        sendPasswordResetEmail(auth, emailsignIn).then((res) => {
            console.log(res)
            toast.success("Password Reset Link Sent To Your Email Address!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
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
            <h4 onClick={handlePasswordReset}>Password Reset</h4>
            <ToastContainer position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored" />
            {/* <button onClick={handleSignOut}>SignOut</button> */}
        </div>
    )
}

export default Index