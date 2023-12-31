import { createContext, useEffect, useState } from "react";

export const AppContext = createContext()

const AppContextProvider = ({ children }) => {
    const [checkingIfLoggedIn, setCheckingIfLoggedIn] = useState(true)
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
    const [userData, setUserData] = useState({
        symptoms: [],
    })
    
    const fetchUserDetails = (token) => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("https://allstackers3.onrender.com/getUser", requestOptions)
        .then(response => response.json())
        .then(result => {
            if (result.error) {
                setIsUserLoggedIn(false)
                setCheckingIfLoggedIn(false)
                localStorage.removeItem('access_token')
            }
            console.log("user details: ", result.data)
            setUserData(result.data)
        })
        .catch(error => console.log('error', error));
    }
    

    useEffect(() => {
        const token = localStorage.getItem('access_token')
        console.log("token: ", token)

        if (token && token.length > 0) {
            setIsUserLoggedIn(true)
            fetchUserDetails(token)
            setCheckingIfLoggedIn(false)
        }
        else {
            setIsUserLoggedIn(false)
            setCheckingIfLoggedIn(false)
        }
    }, [])

    const providerValue = {
        isUserLoggedIn,
        checkingIfLoggedIn,
        setIsUserLoggedIn,
        userData,
        setUserData,
    }

    return (
        <AppContext.Provider value={providerValue}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider