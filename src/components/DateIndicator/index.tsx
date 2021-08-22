import dayjs from 'dayjs'
import React, {useCallback, useEffect, useState} from "react"
import styled from "styled-components"



const Wrapper = styled.div`
  max-width: calc(780px + 4rem);
  width: 100%;
  display : inline-flex;
  margin : 0 auto;
  flex-direction: column;
  padding : 1rem 2rem;
  align-items: flex-end;
  box-shadow: rgb(0 0 0 / 10%) 0px 10px 10px;
  overflow: hidden;
  border-radius: 0.5rem;
  box-sizing: border-box;
`

const HiddenWrapper = styled.div`
  display : flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-end;
  margin: 0 auto;
  overflow: hidden;
`

const ViewBox = styled.svg`
  width: 780px;
  height : 120px;
  overflow: hidden;
  transform-origin: left;
`

const DateBubble = styled.rect`
  width: 10px;
  height: 10px;

`

const Text = styled.text`
  font-size: 9px;
  fill: #24292e;
  user-select: none;
  font-family: 'Noto Sans KR', sans-serif;
`

type Props = {
    dateBubble: string[]
}

const DateIndicator = (props: Props) => {

    const monthOffset = 20;
    const dayOffset = 30;

    const getDateInfo = useCallback(()=>{
        let date = dayjs().subtract(363+dayjs().day(), "days")
        const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        let dateList = []
        let monthList = []
        // date.setDate(date.getDate()-(363+date.getDay()+1))
        for(let i=0;i<53;i++){
            for(let j=0;j<7;j++){
                const y = date.year();
                const m = date.month() + 1;
                const d = date.date();
                const day = date.day()

                if(day===0) {
                    if(d<=7){
                        monthList.push(monthName[m-1])
                    }
                    else monthList.push("")
                }
                dateList.push(y+"-"+m+"-"+d)
                if(date.format() === dayjs().format()) break
                date = date.add(1, "day")
            }
        }

        return {
            dateList: dateList,
            monthList: monthList
        }
    }, [])

    const [dateBubble, setDateBubble] = useState<string[]>([])
    const [monthPosition, setMonthPosition] = useState<string[]>([])

    useEffect(()=>{
        const dateInfo = getDateInfo()
        setDateBubble(dateInfo.dateList)
        setMonthPosition(dateInfo.monthList)
        // eslint-disable-next-line
    }, [])



    return (
            <Wrapper>
                <HiddenWrapper>

                    <ViewBox >
                        <Text x={0} y={monthOffset + 11 * 2}>Mon</Text>
                        <Text x={0} y={monthOffset + 12.5 * 4}>Wed</Text>
                        <Text x={0} y={monthOffset + 13 * 6}>Fri</Text>
                        {
                            monthPosition.map((month, i)=>{
                                return (month) ? <Text key={i} x={dayOffset + i * 14} y={14}>{month}</Text> : null
                            })
                        }

                        {
                            dateBubble.map((date, i)=>{
                                return <DateBubble key={i} rx={2} ry={2} fill={props.dateBubble.includes(date) ? "#63C2C6" : "#ebedf0"} x={dayOffset + Math.floor((i/7)) * 14} y={monthOffset + (i%7) * 14} data-date={date}/>
                            })
                        }
                    </ViewBox>
                </HiddenWrapper>
            </Wrapper>


    )
}

export default DateIndicator