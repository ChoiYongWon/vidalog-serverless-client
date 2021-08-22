import React from "react"
import {recoil_Auth} from "../../../recoils/";
import {useRecoilValue} from "recoil";
import RegisterForm from "../../../components/Auth/RegisterForm";
import {Enum_RegisterProgress} from "../../../types/Auth";
import EmailFormContainer from "./EmailFormContainer";
import IdFormContainer from "./IdFormContainer";
import PwFormCointainer from "./PwFormCointainer";
import SuccessFormContainer from "./SuccessFormContainer";

const RegisterFormContainer = () => {
        const registerStatus = useRecoilValue(recoil_Auth.register_status)

        return<RegisterForm registerStatus={registerStatus}>
                {
                (registerStatus===Enum_RegisterProgress.EMAIL) ?
                        <EmailFormContainer/> :
                (registerStatus===Enum_RegisterProgress.ID) ?
                        <IdFormContainer/> :
                (registerStatus===Enum_RegisterProgress.PW) ?
                        <PwFormCointainer/> : <SuccessFormContainer/>
                }
        </RegisterForm>
}

export default RegisterFormContainer