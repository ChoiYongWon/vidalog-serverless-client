import React, {useEffect, useState} from "react"
import {PostAPI} from "../../api/PostAPI"
import Calendar from "../../components/Calendar";
import {useSetRecoilState} from "recoil";
import {recoil_Home} from "../../recoils";
import {useHistory} from "react-router-dom";
import dayjs from 'dayjs'
import {useLocation} from "react-router-dom"


const CalendarContainer = () => {

    const [monthlyPost, setMonthlyPost] = useState({})
    const [viewDate, setViewDate] = useState<any>(dayjs())
    const [viewLoading, setViewLoading] = useState(false)
    const [imageStatus, setImageStatus] = useState({})
    const [dateSync, setDateSync] = useState(false) // 처음 접속시 쿼리가 있을경우 현재 달도 같이 요청하는거 방지
    const setEditDate = useSetRecoilState(recoil_Home.editDate)
    const history = useHistory()
    const location = useLocation()

    useEffect(()=>{
        if(location.search){
            const date = location.search.split("=")[1].split("-")
            const year = Number(date[0])
            const month = Number(date[1])
            setViewDate((state: any)=>{
                const newDate = dayjs(state).year(year).month(month-1)
                return newDate
            })
        }
        setDateSync(true)
    }, [location.search])

    useEffect(()=>{
        if(dateSync){
            setViewLoading(true)
            PostAPI.getPostByMonth(`${viewDate.year()}-${viewDate.month()+1}`).then(async(res)=>{
                const dates: [] = await res.json()
                const result: any = {}
                
                dates.forEach((data:any)=>result[data["date"]] = data["imgUrl"])
                setMonthlyPost(result)
                return dates.map((i)=>i["date"])
            }).then((date:string[])=>{
                if(date.length===0){ setViewLoading(false); return}
                const imageObject:any = {}
                
                date.forEach((i:string)=>imageObject[i] = new Promise(()=>{}))
                setImageStatus(imageObject)
            }).catch((e)=>{
                console.log(e)
                setViewLoading(false)
            })
        }
        
    },[viewDate, dateSync, setViewLoading])

    useEffect(()=>{
        if(viewLoading && Object.keys(imageStatus).length > 0) Promise.all(Object.values(imageStatus)).then((result: any)=>{
            setViewLoading(false)
            setImageStatus({})
        }).catch(e=>{
            console.log(e)
            setViewLoading(false)
        })
    }, [imageStatus, viewLoading])

    const onImageLoad = (e:any) => {
        const selected:string = e.currentTarget.dataset.date
        setImageStatus((state)=>{
            const tmp:any =  {...state }
            tmp[selected] = Promise.resolve()
            return tmp
        })
    }

    const onCalendarPrevClick = () => {
        const newDate = dayjs(viewDate).subtract(1, "month")
        history.push({
            search: `?date=${newDate.format("YYYY-MM")}`
        })

    }

    const onCalendarNextClick = () => {
        const newDate = dayjs(viewDate).add(1, "month")
        history.push({
            search: `?date=${newDate.format("YYYY-MM")}`
        })

    }

    const onEmptyClick = (e:any) => {
        const dateInfo= e.currentTarget.dataset.date.split("-")
        setEditDate({
            year: dateInfo[0],
            month: dateInfo[1],
            date: dateInfo[2]
        })
        history.push("edit")
    }

    const onPostClick = (e:any) => {
        const date = e.currentTarget.dataset.date;
        const query = `date=${date}`
        history.push(`post?${query}`)
    }


    return <>
        <Calendar onPostClick={onPostClick} onImageLoad={onImageLoad} loading={viewLoading} viewMonth={viewDate.month()+1} viewYear={viewDate.year()} postInfo={monthlyPost} onCalendarPrevClick={onCalendarPrevClick} onCalendarNextClick={onCalendarNextClick} onEmptyClick={onEmptyClick}/>
    </>


}

export default CalendarContainer