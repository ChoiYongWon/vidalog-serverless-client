import React, {useEffect, useState} from "react"

import {auth_status, login_btnStatus, login_id, login_pw} from "../../../recoils/auth";
import LoginForm from "../../../components/Auth/LoginForm";
import {useRecoilState, useSetRecoilState} from "recoil";
import {Auth, Enum_AuthStatus} from "../../../types/Auth";
import {useHistory} from "react-router-dom"
import {recoil_Auth, recoil_User} from "../../../recoils";
import {LoginProcess} from "../../../services/LoginProcess";
import {User} from "../../../types/User";


const LoginFormContainer = () => {
    const [id, setId] = useRecoilState(login_id)
    const [pw, setPw] = useRecoilState(login_pw)
    const [loginBtnStatus, setLoginBtnStatus] = useRecoilState(login_btnStatus)
    const setAuthStatus = useSetRecoilState(auth_status)
    const setAuthentication = useSetRecoilState(recoil_Auth.authenticate)
    const setUser = useSetRecoilState(recoil_User.user)
    const history = useHistory()
    const [errorObj, setErrorObj] = useState({
        error : false,
        msg : ""
    })

    useEffect(()=>{
        if(id.length !== 0 && pw.length !== 0) setLoginBtnStatus(true)
        else setLoginBtnStatus(false)
    }, [id, pw, setLoginBtnStatus])

    const onChangeId = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setId(e.target.value)
    }

    const onChangePw = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setPw(e.target.value)
    }

    const onClickLoginBtn = (e : React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        if(!loginBtnStatus) return
        LoginProcess(id, pw).then((payload)=>{
            setAuthentication(Auth.LOGIN)
            setUser(payload as User)
            setId(""); setPw(""); setLoginBtnStatus(false);
            history.push("/")
        }).catch((e)=>{
            console.log(e)
            setId(""); setPw(""); setLoginBtnStatus(false);
            setErrorObj({
                error : true,
                msg : "아이디 또는 비밀번호가 틀립니다."
            })
        })

    }

    const onClickFindBtn = () => {
        setAuthStatus(Enum_AuthStatus.Find)
    }

    const onClickRegisterBtn = () => {
        setAuthStatus(Enum_AuthStatus.Register)
    }

    return <LoginForm
        id={id}
        pw={pw}
        error={errorObj.error}
        errorMsg={errorObj.msg}
        loginBtnStatus={loginBtnStatus}
        onChangeId={onChangeId}
        onChangePw={onChangePw}
        onClickLoginBtn={onClickLoginBtn}
        onClickFindBtn={onClickFindBtn}
        onClickRegisterBtn={onClickRegisterBtn}
    />

}

export default LoginFormContainer