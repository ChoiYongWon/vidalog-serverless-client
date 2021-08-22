import React from "react"
import SuccessForm from "../../../components/Auth/RegisterForm/SuccessForm";
import {useResetRecoilState} from "recoil";
import {recoil_Auth} from "../../../recoils";


const SuccessFormContainer = () => {


    const auth = useResetRecoilState(recoil_Auth.auth_status)
    const register_status = useResetRecoilState(recoil_Auth.register_status)
    const email = useResetRecoilState(recoil_Auth.email_email)
    const pw = useResetRecoilState(recoil_Auth.pw_pw)
    const rePw = useResetRecoilState(recoil_Auth.pw_rePw)
    const id = useResetRecoilState(recoil_Auth.id_id)
    // const login_id = useResetRecoilState(recoil_Auth.login_id)
    // const login_pw = useResetRecoilState(recoil_Auth.login_pw)
    // const email_availableEmail = useResetRecoilState(recoil_Auth.email_availableEmail)
    // const email_authorization = useResetRecoilState(recoil_Auth.email_authorization)
    // const email_authCode = useResetRecoilState(recoil_Auth.email_authCode)
    // const email_btnStatus = useResetRecoilState(recoil_Auth.email_btnStatus)
    // const id_available = useResetRecoilState(recoil_Auth.id_availableId)
    // const id_btnStatus = useResetRecoilState(recoil_Auth.id_btnStatus)
    // const pw_availablePw = useResetRecoilState(recoil_Auth.pw_availablePw)
    // const pw_btnStatus = useResetRecoilState(recoil_Auth.pw_btnStatus)



    const onClickBtn = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        auth()
        register_status()
        email()
        id()
        pw()
        rePw()
        // email_availableEmail()
        // email_authorization()
        // email_authCode()
        // email_btnStatus()
        // id_available()

        // id_btnStatus()

        // pw_availablePw()
        // pw_btnStatus()
    }

    return <SuccessForm
        onClickBtn={onClickBtn}
    />
}

export default SuccessFormContainer