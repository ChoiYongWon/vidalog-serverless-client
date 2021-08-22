import React, {useCallback, useEffect, useState} from "react"
import {useRecoilState, useSetRecoilState} from "recoil";
import {recoil_Auth} from "../../../recoils/";
import {Enum_RegisterProgress} from "../../../types/Auth";
import IdForm from "../../../components/Auth/RegisterForm/IdForm";
import {AuthAPI} from "../../../api/AuthAPI";


const IdFormContainer = () => {
    // const [idAvailable, setIdAvailable] = useRecoilState(recoil_Auth.id_availableId)
    // const [idBtnStatus, setIdBtnStatus] = useRecoilState(recoil_Auth.id_btnStatus)
    const [id, setId] = useRecoilState(recoil_Auth.id_id)
    const setRegisterStatus = useSetRecoilState(recoil_Auth.register_status)
    const [idBtnStatus, setIdBtnStatus] = useState(false)
    const [errorObj, setErrorObj] = useState({
        error : false,
        msg : ""
    })

    useEffect(()=>{
        if(id.length!==0) setIdBtnStatus(true)
        else setIdBtnStatus(false)
    }, [id, setIdBtnStatus])

    const onChangeId = (e : React.ChangeEvent<HTMLInputElement>) => {
        setId(e.target.value)
    }

    const idFilter = (id : string) => {
        //5자 이상 18자 이하 문자 또는 숫자 . _
        const regExp = /^[A-Za-z0-9][A-Za-z0-9._#]{4,16}$/g
        return regExp.test(id)
    }

    const onClickPrevBtn = useCallback(()=>{
        setRegisterStatus(Enum_RegisterProgress.EMAIL)
    },[setRegisterStatus])

    const onClickIdSubmitBtn = (e : React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        if(!idBtnStatus) return
        setErrorObj({error: false, msg: ""})
        //loading
        //TODO id 조건 확인
        if(!idFilter(id)){
            setErrorObj({
                error: true,
                msg: "5자 이상 18자 이하, 문자 숫자 . _ 만 허용됩니다."
            })
            return
        }
        //TODO id 중복 확인 api
        AuthAPI.idValidation(id).then(async res=>{
            const result = await res.json()
            if(result.isValid) setRegisterStatus(Enum_RegisterProgress.PW)
            else setErrorObj({error: true, msg : "이미 존재하는 아이디 입니다."})
        }).catch(()=>{
            setErrorObj({error: true, msg : "서버 오류"})
        })

        //TODO ID POST Api

    }

    return <IdForm
        id={id}
        error={errorObj.error}
        errorMsg={errorObj.msg}
        idBtnStatus={idBtnStatus}
        onClickPrevBtn={onClickPrevBtn}
        onClickIdSubmitBtn={onClickIdSubmitBtn}
        onChangeId={onChangeId}
    />
}

export default IdFormContainer