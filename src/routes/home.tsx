import React from "react";
import {Redirect, Route} from "react-router-dom";
import {recoil_User} from "../recoils/index"
import {useRecoilValue} from "recoil";
import Home from "../pages/Home";

type Props = {
    role : number[]
    path : string
}

  const HomeRouter = (props: Props) => {

      const {role} = useRecoilValue(recoil_User.user)

      return (
          <Route exact path={props.path} render={
              ()=>props.role.includes(role) ? <Home/> : <Redirect to={"/auth"}/>
          }/>
      )
  }

  export default HomeRouter