import { getAuth, signOut } from 'firebase/auth';
import React from 'react'
const auth = getAuth();
const Profile = () => {
    const handleSignOut = () => {
        signOut(auth).then((res) => {
            console.log("SignOut")
            { localStorage.removeItem('user') }
            // setData("No User")
            window.location.assign('/')
        }).catch((err) => {
            console.log(err)
        })
    }
    return (
        <>
            <h1>I AM Profile</h1>
            <button onClick={handleSignOut}>SignOut</button>
        </>
    )
}

export default Profile