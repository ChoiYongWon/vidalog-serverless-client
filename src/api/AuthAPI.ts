import {clientInfo, HostUrl} from "../.config/constant";

export const AuthAPI = {
    idValidation : (id: string): Promise<any>=> {
        return fetch(HostUrl+"/auth/idValidation?id="+id, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then( res=>{
            if(!res.ok) throw res
            return res
        })
    },

    login : (id: string, password: string): Promise<any>=> {
        return fetch(HostUrl+"/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id : id,
                password : password
            })

        }).then( res=>{
            if(!res.ok) throw res
            return res
        })
    },

    logout : (): Promise<any>=> {
        return fetch(HostUrl+"/auth/logout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization" : "Bearer "+localStorage.getItem("VAT")
            },
            body: JSON.stringify({
                refreshToken: localStorage.getItem("VRT") ?? ""
            })

        }).then(res=>{
            if(!res.ok) throw res
            return res
        })
    },

    register : (id: string, email: string, password: string): Promise<any>=> {
        return fetch(HostUrl+"/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id : id,
                email : email,
                password : password,
                nickname : ""
            })

        }).then( res=>{
            if(!res.ok) throw res
            return res
        })
    },

    tockenValidation : (id: string): Promise<any>=> {
        return fetch(HostUrl+"/auth/isATValid", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization" : "Bearer "+localStorage.getItem("VAT")
            }
        }).then(res=>{
            if(!res.ok) throw res
            return res
        })
    },

    refreshToken : (refreshToken: string | null): Promise<any>=> {
        return fetch(HostUrl+"/auth/refreshToken", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization" : "Basic "+Buffer.from(clientInfo.id+":"+clientInfo.secret, "utf8").toString("base64")
            },
            body: JSON.stringify({
                refresh_token: refreshToken ?? null
            })
        }).then( res=>{
            if(!res.ok) throw res
            return res
        })
    },
    
}