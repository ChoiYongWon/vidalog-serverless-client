
import {Switch, BrowserRouter as Router} from "react-router-dom";
import HomeRouter from "./home"
import AuthRouter from "./auth";
import React from "react";
import {Role} from "../types/Auth";
import EditRouter from "./edit";


export const RouterIndex = () => {

  return (
      <Router>
        <Switch>
            <EditRouter path={"/edit"} role={[Role.USER, Role.ADMIN]}/>
            <AuthRouter path={"/auth"} role={[Role.GUEST]}/>
            <HomeRouter path={"/"} role={[Role.USER]}/>
        </Switch>
      </Router>

  )
}