import React, {useEffect, useState} from "react"
import Header from "../../components/Header";
import {LogoutProcess} from "../../services/LogoutProcess";
import {useResetRecoilState, useSetRecoilState} from "recoil";
import {recoil_Auth, recoil_Home, recoil_User} from "../../recoils";
import {useHistory} from "react-router-dom"
import dayjs from 'dayjs'
import {PostAPI} from "../../api/PostAPI";

const HeaderContainer = () =>{

    const resetUser = useResetRecoilState(recoil_User.user)
    const resetAuth = useResetRecoilState(recoil_Auth.authenticate)
    const setEditDate = useSetRecoilState(recoil_Home.editDate)
    const menu = ["로그아웃"]
    const [menuShow, setMenuShow] = useState(false)
    const [postIsWritten, setPostIsWritten] = useState(false)
    const menuOnClicks = [
        ()=>LogoutProcess().then(()=>{
            resetUser()
            resetAuth()
        })
    ]

    const history = useHistory()

    useEffect(()=>{
        PostAPI.isWritten(dayjs().format("YYYY-M-D")).then(async res=>{
            const result = await res.json()
            if(result.written) setPostIsWritten(true)
            else setPostIsWritten(false)
        }).catch(e=>console.log(e))
        // console.log("Header mount")
    },[])

    const onClickUserIcon = () => {
        setMenuShow((state)=>!state)
    }

    const onCloseUserIcon = () => {
        setMenuShow(false)
    }

    const editOnClick = () => {
        if(postIsWritten) return
        const date = dayjs()
        setEditDate({
            year: date.year(),
            month: date.month() + 1,
            date: date.date()
        })
        history.push("edit")
    }

    return (
        <Header
            editEnable={!postIsWritten}
            menu={menu}
            menuOnClicks={menuOnClicks}
            menuShow={menuShow}
            onClickUserIcon={onClickUserIcon}
            onCloseUserIcon={onCloseUserIcon}
            editOnClick={editOnClick}
        />
    )

}

export default HeaderContainer