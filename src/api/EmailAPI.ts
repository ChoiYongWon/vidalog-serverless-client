import {HostUrl} from "../.config/constant";

export const EmailAPI = {
    emailVerification : (email: string): Promise<any> => {
        return fetch(HostUrl+"/email/verificationCode",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                email : email
            })
        }).then( (res)=>{
            if(!res.ok) throw res
            return res
        })
    },

    verifyCode : (email : string, code: string): Promise<any> => {
        return fetch(HostUrl+"/email/verifyCode",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                email : email,
                verificationCode : code
            })
        }).then( (res)=>{
            if(!res.ok) throw res
            return res
        })
    }

}