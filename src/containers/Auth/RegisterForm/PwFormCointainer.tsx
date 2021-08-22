import React, {useCallback, useEffect, useState} from "react"
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {recoil_Auth} from "../../../recoils/";
import {Enum_RegisterProgress} from "../../../types/Auth";
import PwForm from "../../../components/Auth/RegisterForm/PwForm";
import {AuthAPI} from "../../../api/AuthAPI";


const PwFormContainer = () => {

    const [pw, setPw] = useRecoilState(recoil_Auth.pw_pw)
    const [rePw, setRePw] = useRecoilState(recoil_Auth.pw_rePw)
    // const [pwBtnStatus, setPwBtnStatus] = useRecoilState(recoil_Auth.pw_btnStatus)
    const [pwBtnStatus, setPwBtnStatus] = useState(false)
    const setRegisterStatus = useSetRecoilState(recoil_Auth.register_status)
    const id = useRecoilValue(recoil_Auth.id_id)
    const email = useRecoilValue(recoil_Auth.email_email)

    const [pwErrorObj, setPwErrorObj] = useState({
        error : false,
        msg : ""
    })

    const [rePwErrorObj, setRePwErrorObj] = useState({
        error : false,
        msg : ""
    })

    const pwFilter = (pw : string) => {
        //8자 이상, 문자와 숫자 1개 이상
        // eslint-disable-next-line
        const regExp = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]{8,}$/)
        return regExp.test(pw)
    }

    useEffect(()=>{
        if(pw.length > 0 && rePw.length > 0)
            setPwBtnStatus(true)
        else
            setPwBtnStatus(false)
    }, [pw, rePw,setPwBtnStatus])

    const onChangePw = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPw(e.target.value)
    }

    const onChangeRePw = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRePw(e.target.value)
    }

    const onClickPrevBtn = useCallback(()=>{
        setRegisterStatus(Enum_RegisterProgress.ID)
    },[setRegisterStatus])

    const onClickPwSubmitBtn = (e : React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        if(!pwBtnStatus) return

        setPwErrorObj({error : false, msg : ""})
        setRePwErrorObj({error : false, msg : ""})

        if(!pwFilter(pw)) {
            setPwErrorObj({error: true, msg: "비밀번호는 5자 이상, 문자와 숫자가 1개 이상이어야 합니다."})
            return
        }

        if(pw !== rePw){

            setRePwErrorObj({error : true, msg : "비밀번호가 일치하지 않습니다."})

            return
        }

        //TODO Register Api
        AuthAPI.register(id, email, pw).then(()=>{
            setRegisterStatus(Enum_RegisterProgress.SUCCESS)
        }).catch((e)=>{
            console.log(e)
            setRePwErrorObj({error : true, msg : "회원가입 되지 않았습니다."})
        })


        //임시 코드
        //이메일 인증번호 체킹
    }

    return <PwForm
        pw={pw}
        rePw={rePw}
        pwError={pwErrorObj.error}
        pwErrorMsg={pwErrorObj.msg}
        rePwError={rePwErrorObj.error}
        rePwErrorMsg={rePwErrorObj.msg}
        onClickPrevBtn={onClickPrevBtn}
        onClickPwSubmitBtn={onClickPwSubmitBtn}
        onChangePw={onChangePw}
        onChangeRePw={onChangeRePw}
        pwBtnStatus={pwBtnStatus}
    />
}

export default PwFormContainer