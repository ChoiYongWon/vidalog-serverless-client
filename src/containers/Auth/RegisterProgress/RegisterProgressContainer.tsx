import React from "react"
import {useRecoilValue} from "recoil";
import {recoil_Auth} from "../../../recoils/";
import RegisterProgress from "../../../components/Auth/RegisterProgress";

const RegisterProgressContainer = () => {
    const registerStatus = useRecoilValue(recoil_Auth.register_status)

    return <RegisterProgress status={registerStatus}/>
}

export default RegisterProgressContainer