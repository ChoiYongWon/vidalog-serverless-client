import {AuthAPI} from "../api/AuthAPI";
import jwt from "jsonwebtoken"

//TODO 로그인 프로세스

export const LoginProcess = (id: string, pw: string) => {
    return AuthAPI.login(id, pw).then(async res=>{
        const result = await res.json()
        localStorage.setItem("VAT",result.access_token)
        localStorage.setItem("VRT",result.refresh_token)

        const {iat, exp, ...rest} = jwt.decode(result.access_token) as jwt.JwtPayload
        return rest
    })
}