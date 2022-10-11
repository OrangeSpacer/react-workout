import { AuthContext } from "../Context/AuthContext"
import { useContext } from 'react'


export const useAuth = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    return {
        isAuth,
        setIsAuth
    }
}