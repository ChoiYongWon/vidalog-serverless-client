import React, {useEffect, useState} from "react"
import {PostAPI} from "../../api/PostAPI"
import DateIndicator from "../../components/DateIndicator";
import Text from "../../components/Text";


const EditorContainer = () => {

    const [dateBubble, setDateBubble] = useState([])

    useEffect(()=>{
        PostAPI.getPostedDateByYearFromNow().then(async(res)=>{
            const dates = await res.json()
            setDateBubble(dates.postedDate)
        })
    },[])

    return <>
        <Text value={`365일 동안 총 ${dateBubble.length}번의 일기를 쓰셨습니다.`} size={"14px"} color={"#24292e"}/>
        <DateIndicator dateBubble={dateBubble}/>
    </>


}

export default EditorContainer