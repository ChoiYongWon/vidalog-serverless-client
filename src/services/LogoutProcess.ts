import {AuthAPI} from "../api/AuthAPI";

export const LogoutProcess = () => {
    return AuthAPI.logout().then(()=>{
        localStorage.removeItem("VAT")
        localStorage.removeItem("VRT")
        return
    })
}