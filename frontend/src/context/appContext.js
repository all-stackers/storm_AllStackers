import { createContext, useEffect, useState } from "react";

export const AppContext = createContext()

const AppContextProvider = ({ children }) => {
    const [checkingIfLoggedIn, setCheckingIfLoggedIn] = useState(true)
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('access_token')
        console.log("token: ", token)

        if (token && token.length > 0) {
            setIsUserLoggedIn(true)
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
        setIsUserLoggedIn
    }

    return (
        <AppContext.Provider value={providerValue}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider