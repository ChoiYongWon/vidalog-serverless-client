import React from "react"
import {useResetRecoilState} from "recoil";
import {recoil_Auth} from "../../../recoils";
import Header from "../../../components/Auth/Header";

const HeaderContainer = () => {

    const auth = useResetRecoilState(recoil_Auth.auth_status)
    const register_status = useResetRecoilState(recoil_Auth.register_status)
    const email = useResetRecoilState(recoil_Auth.email_email)
    const pw = useResetRecoilState(recoil_Auth.pw_pw)
    const rePw = useResetRecoilState(recoil_Auth.pw_rePw)
    const id = useResetRecoilState(recoil_Auth.id_id)

    const onClick = () => {
        auth()
        register_status()
        email()
        id()
        pw()
        rePw()
    }

    return (
        <Header onClick={onClick}/>
    )
}

export default HeaderContainer