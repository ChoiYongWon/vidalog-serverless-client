import React, {useEffect} from "react"
import { useRecoilValue} from "recoil";
import {recoil_Notification} from "../../recoils";
import styled from "styled-components";
import NotificationContainer from "./NotificationContainer";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
`

const NotificationPool = () => {

    const notification = useRecoilValue(recoil_Notification.notification_status)
    useEffect(()=>{
        console.log(notification)
    }, [notification])
    return (
        <Wrapper>
            {
                notification.text ? <NotificationContainer status={notification.status} text={notification.text} duration={notification.duration}/> : null
            }
        </Wrapper>
    )
}

export default NotificationPool

