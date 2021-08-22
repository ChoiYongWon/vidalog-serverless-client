import React from "react";
import { Route, Redirect} from "react-router-dom";
import Auth from "../pages/Auth";
import {useRecoilValue} from "recoil";
import {recoil_User} from "../recoils";

interface Props {
    role : number[]
    path : string
}

const AuthRouter = (props: Props) => {

    const {role} = useRecoilValue(recoil_User.user)

    return (
        <Route path={props.path} render={
            ()=>props.role.includes(role) ? <Auth/> : <Redirect to={"/"}/>
        }/>
    )
}

export default AuthRouter