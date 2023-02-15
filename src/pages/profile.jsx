import { uuidv4 } from '@firebase/util';
import { getAuth, signOut } from 'firebase/auth';
import { getDownloadURL, listAll, ref, uploadBytes } from 'firebase/storage';
import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import { storage } from './firebaseStorage';
const auth = getAuth();
const Profile = () => {
    const [image, setImage] = useState(null)
    const [imageList, setImageList] = useState([])
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
    const imageListRef = ref(storage, "profilePics/")
    useEffect(() => {
        listAll(imageListRef).then((res) => {
            res.items.forEach((item) => {
                console.log(imageListRef)
                getDownloadURL(item).then(((url) => { setImageList((prev) => [...prev, url]) }))
            })
        })
    }, [])
    const updateProfile = () => {
        if (image == null) {
            return
        }
        const imageRef = ref(storage, `profilePics/${image.name + uuidv4()}`)
        uploadBytes(imageRef, image).then((res) => {
            toast.success("Profile Updated!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
            getDownloadURL(res.ref).then((url) => {
                setImageList((prev) => [...prev, url])
            })
        })
    }
    return (
        <>
            <h1>I AM {localStorage.getItem('user')}</h1>
            <button onClick={handleSignOut}>SignOut</button>
            <input type="file" name="" id="" onChange={(e) => setImage(e.target.files[0])} />
            <button onClick={updateProfile}>Upload</button>
            <div>

                {imageList.map((url) => {
                    return <img key={url} src={url} alt="" width={300} draggable={false} />
                })}
            </div>
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
        </>
    )
}

export default Profile