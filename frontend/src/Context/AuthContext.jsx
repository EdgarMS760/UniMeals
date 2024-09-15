import { useCallback, useEffect } from "react";
import { createContext, useState } from "react";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";



export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [activeUser, setActiveUser] = useState({
        email: ""
    });
    //Funcion para obtener el usuario, si es que hay usuario iniciado
    useEffect(() => {
        const userInfo = localStorage.getItem("User")
        setActiveUser(JSON.parse(userInfo))
    }, [])

    //Firebase storage
    const uploadFile = (file, fileType) => {
        return new Promise((resolve, reject) => {
            const storage = getStorage(app);
            const fileName = new Date().getTime() + file.name
            const storageRef = ref(storage, 'icons/' + fileName);
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on('state_changed',
                (snapshot) => {
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => {
                    // A full list of error codes is available at
                    // https://firebase.google.com/docs/storage/web/handle-errors
                    switch (error.code) {
                        case 'storage/unauthorized':
                            // User doesn't have permission to access the object
                            break;
                        case 'storage/canceled':
                            // User canceled the upload
                            break;

                        // ...

                        case 'storage/unknown':
                            // Unknown error occurred, inspect error.serverResponse
                            break;
                    }
                },
                () => {
                    // Upload completed successfully, now we can get the download URL
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        console.log('File available at', downloadURL);
                        resolve(downloadURL)
                    });
                }
            );
        })

    }

    //LogOut
    const logOut = useCallback(async (e) => {
        localStorage.removeItem("User")
        setActiveUser(null)
    }, [activeUser])
    return (<AuthContext.Provider value={{ activeUser, setActiveUser, uploadFile, logOut }}>{children}</AuthContext.Provider>)
}

