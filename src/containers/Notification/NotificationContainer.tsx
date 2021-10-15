import React from "react"
import {useResetRecoilState} from "recoil";
import {recoil_Notification} from "../../recoils";
import Notification from "../../components/Notification";

type Props = {
    status: string
    text: string
    duration: number
}

const NotificationContainer = (props: Props) => {
    const deleteNotification = useResetRecoilState(recoil_Notification.notification_status)

    return <Notification status={props.status} text={props.text} duration={props.duration} onUnMount={deleteNotification}/>
}

export default NotificationContainer