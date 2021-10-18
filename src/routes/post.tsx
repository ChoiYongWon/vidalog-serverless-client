import React from "react";
import {Redirect, Route} from "react-router-dom";
import {recoil_User} from "../recoils/index"
import {useRecoilValue} from "recoil";
import Post from "../pages/Post";

type Props = {
    role : number[]
    path : string
}

const PostRouter = (props: Props) => {

    const {role} = useRecoilValue(recoil_User.user)

    return (
        <Route exact path={props.path} render={
            ()=>props.role.includes(role) ? <Post/> : <Redirect to={"/auth"}/>
        }/>
    )
}

export default PostRouter