import React, { useEffect, useState } from 'react';
import { RouterIndex } from "./routes/index"
import {createGlobalStyle} from "styled-components"
import { Init } from "./.start/init"
import {recoil_Auth, recoil_Notification, recoil_User} from "./recoils/index";
import {useSetRecoilState} from "recoil";
import { Auth } from "./types/Auth";
import {useHistory} from "react-router-dom"
import {User} from "./types/User";
import NotificationPool from "./containers/Notification/NotificationPool";

const GlobalStyle = createGlobalStyle`
  html, body {
    width : 100%;
    height : 100%;
    padding : 0;
    margin : 0;
    -moz-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  
  input, textarea, button {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    border-radius : 0;
    -webkit-border-radius : 0;
    -moz-border-radius : 0;
  }
`

function App() {

    const setAuthentication = useSetRecoilState(recoil_Auth.authenticate)
    const setUser = useSetRecoilState(recoil_User.user)
    const addNotification = useSetRecoilState(recoil_Notification.notification_status)
    const [initialized, setInitialized] = useState(false)
    const history = useHistory()

    //마운팅 첫 단계에 start 호출후 initialized true로 설정
    useEffect(()=>{
        Init.start().then((payload)=>{
            setAuthentication(Auth.LOGIN)
            // console.log("payload", payload)
            setUser(payload as User)

        }).then(()=>setInitialized(true)).catch((e)=>{
            console.log("error", e)
            if(e==="VRT_EXPIRED") addNotification({text: "토큰이 만료되었습니다", duration: 3, status: "WARNING"})

            setInitialized(true)
            history.push("auth")
        })
        // eslint-disable-next-line
    },[])

  return (
      //start가 실행되기 전까진 렌더링 안됨
      initialized ?
          <>
              <GlobalStyle/>
              <RouterIndex/>
              <NotificationPool/>

          </> : null


  );
}

export default App;
