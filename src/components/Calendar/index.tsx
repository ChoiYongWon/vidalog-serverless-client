import React, {useEffect, useState} from "react"
import styled, {keyframes} from "styled-components"
import {MdKeyboardArrowLeft,MdKeyboardArrowRight} from "react-icons/md"
import dayjs from 'dayjs'

const Wrapper = styled.div`
  width: 100%;
  max-width: 844px;
  min-width: 16.75rem;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  box-sizing: border-box;
  font-family: 'Noto Sans KR', sans-serif;
  box-shadow : rgb(0 0 0 / 15%) 0px 0px 10px;
  border-radius: 0.5rem;
  position: relative;

  @media(max-width: 600px){
    box-shadow: none;
    padding: 0;
  }
  
`

const MonthTitle = styled.div`
  font-size: 1.2rem;
  color : rgb(52,58,64);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
  user-select: none;
`

// const IconWrapper = styled.div`
//
// `

const DayBar = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem 0;
  font-size: 1.1rem;
  color: #24292e;
  display: flex;
`

const Day = styled.div`
  width: 14.2857%;
  height: 1.5rem;
  min-width: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  user-select: none;
  @media(max-width: 600px){
    min-width: 2.25rem;
  }
`

type DayWrapperProps = {
    $loading : boolean
}

const DayWrapper = styled.div`
  opacity: ${(props:DayWrapperProps)=>props.$loading ? "0" : "1"};
  visibility: ${(props:DayWrapperProps)=>props.$loading ? "hidden" : "visible"};
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
`

const DayItem = styled.div`
  width: 14.2857%;
  min-width: 3rem;
  min-height: 3rem;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0.75rem;
  box-sizing: border-box;

  @media(max-width: 600px){
    min-width: 2.25rem;
    min-height: 2.25rem;
    padding:  0.25rem 0.5rem;
  }
`

const DayImageNumWrapper = styled.span`
  color : rgb(255,255,255);
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;

`

const DayNum = styled.span`
  backdrop-filter: blur(0.4px);
  border-radius: 4px;
  padding: 0 2px;
  font-weight: bold;
`

const DayImageWrapper = styled.div`
  cursor: pointer;
  user-select: none;
  width: 3rem;
  height: 3rem;
  position: relative;

  @media(max-width: 600px){
    width: 2.25rem;
    height: 2.25rem;
  }
`

const DayImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  object-fit: cover;
  position: absolute;
`

const NonFilledItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #24292e;
  font-weight: bold;
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
  cursor: pointer;
  user-select: none;
  
  &:hover{
    background: rgba(0,0,0,0.1);
  }

  @media(max-width: 600px){
    width: 2.25rem;
    height: 2.25rem;
  }
`

const DisabledNonFilledItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(52,58,64,0.3);
  font-weight: bold;
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
  user-select: none;

  @media(max-width: 600px){
    width: 2.25rem;
    height: 2.25rem;
  }
`

const LoadingAnimation = keyframes`
  0% {
    transform: scale(1.2);
  }
  30% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.2);
  }
`

const LoadingFallBackWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
`

const LoadingFallBack = styled.div`
  animation: ${LoadingAnimation} 1s ease infinite;
  font-size: 1.2rem;
`


type Props = {
    viewMonth: number
    viewYear: number
    loading: boolean
    postInfo : any
    onCalendarPrevClick: ()=>void
    onCalendarNextClick: ()=>void
    onEmptyClick: (e:any)=>void
    onImageLoad: (e:any)=>void
} & typeof defaultProps

const defaultProps = {
    viewYear: dayjs().year(),
    viewMonth: dayjs().month() + 1,
    loading: false,
    postInfo: {},
    onCalendarPrevClick: ()=> {},
    onCalendarNextClick: ()=> {},
    onEmptyClick: (e:any)=>{},
    onImageLoad: (e:any)=>{}
}

const Calendar = (props: Props) => {

    const [monthInfo, setMonthInfo] = useState([0,0])

    useEffect(()=>{
        let date = dayjs(`${props.viewYear}-${props.viewMonth}-1`)
        let startDay = date.day()
        date = date.add(1, "month").subtract(1, "day")
        // date.setMonth(date.getMonth() + 1)
        // date.setDate(date.getDate() - 1)
        // let maxDate = date.getDate()

        setMonthInfo([startDay, date.date()])
    },[props.viewYear, props.viewMonth])

    const days = ["일", "월", "화", "수", "목", "금", "토"]

    return (
        <>
            <Wrapper>
                <MonthTitle>
                    <MdKeyboardArrowLeft onClick={props.onCalendarPrevClick} size={30} color={"rgb(52,58,64)"} style={{
                        cursor: "pointer"
                    }}/>
                    {props.viewYear}년 {props.viewMonth}월
                    <MdKeyboardArrowRight onClick={props.onCalendarNextClick} size={30} color={"rgb(52,58,64)"} style={{
                        cursor: "pointer"
                    }}/>
                </MonthTitle>
                <DayBar>
                    {
                        days.map((day,i)=><Day key={i}>{day}</Day>)
                    }
                </DayBar>
                {
                    props.loading ?
                        <LoadingFallBackWrapper>
                            <LoadingFallBack>로딩중...</LoadingFallBack>
                        </LoadingFallBackWrapper>

                        : null
                }
                <DayWrapper $loading={props.loading}>
                    {
                        Array(35).fill(1).map((data, i)=>{
                            const currentFullDate = `${props.viewYear}-${props.viewMonth}-${(i - monthInfo[0] + 1)}`
                            const currentDate = (i - monthInfo[0] + 1)

                            //0~34중에 날짜에 해당안되는것들 제외
                            if(i<monthInfo[0] || currentDate>monthInfo[1]) return <DayItem key={i}></DayItem>

                            //현재 날짜보다 지난 시간 비활성화
                            if(dayjs(currentFullDate) > dayjs()) return (
                                <DayItem key={i}>
                                    <DisabledNonFilledItem>{currentDate}</DisabledNonFilledItem>
                                </DayItem>
                            )

                            //일기가 작성되지 않은 공간
                            if(!Object.keys(props.postInfo).includes(currentFullDate)) return (
                                <DayItem key={i}>
                                    <NonFilledItem onClick={props.onEmptyClick} data-date={currentFullDate}>{currentDate}</NonFilledItem>
                                </DayItem>
                            )

                            //일기가 작성됬을 경우
                            return (<DayItem key={i}>
                                <DayImageWrapper>
                                    <DayImage onLoad={props.onImageLoad} data-date={currentFullDate} src={props.postInfo[currentFullDate]}></DayImage>
                                    <DayImageNumWrapper>
                                        <DayNum>{currentDate}</DayNum>
                                    </DayImageNumWrapper>
                                </DayImageWrapper>
                            </DayItem>)
                        })
                    }
                </DayWrapper>
            </Wrapper>
        </>

    )
}

Calendar.defaultProps = defaultProps

export default Calendar
