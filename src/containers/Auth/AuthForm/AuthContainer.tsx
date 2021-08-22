import React from "react";
import {useRecoilValue} from "recoil";

import AuthLayout from "../../../layouts/Auth";

import {auth_status} from "../../../recoils/auth";
import {Enum_AuthStatus} from "../../../types/Auth";
import LoginFormContainer from "../LoginForm/LoginFormContainer";
import RegisterProgressContainer from "../RegisterProgress/RegisterProgressContainer";
import RegisterFormContainer from "../RegisterForm/RegisterFormContainer";
import LoginLayout from "../../../layouts/Auth/Login";
import HeaderContainer from "../Header/HeaderContainer";
import RegisterLayout from "../../../layouts/Auth/Register";
const AuthContainer = () => {

    const authStatus = useRecoilValue(auth_status)

    return (

            <AuthLayout>
                {
                    authStatus === Enum_AuthStatus.Login ?
                        <LoginLayout>
                            <LoginFormContainer/>
                        </LoginLayout>
                        :
                    authStatus === Enum_AuthStatus.Find ?
                        <>구현중...</>
                        :
                        <RegisterLayout>
                            <HeaderContainer/>
                            <RegisterProgressContainer/>
                            <RegisterFormContainer/>
                        </RegisterLayout>



                }

            </AuthLayout>


    )
}

export default AuthContainer