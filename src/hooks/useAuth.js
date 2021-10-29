import { useContext } from "react"
import { AuthContext } from "../contextapi/AuthProvider"

const useAuth = () => {
    return useContext(AuthContext)
}

export default useAuth