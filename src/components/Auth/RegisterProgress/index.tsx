import React, {useEffect, useState} from "react"
import styled from "styled-components"
import {Enum_RegisterProgress} from "../../../types/Auth";


const Wrapper = styled.div`
  width : 100%;
  max-width : 350px;
  height : auto;
  display : grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(2, 40px);
  align-items: center;
  font-family: 'Noto Sans KR', sans-serif;

  @media(max-width: 500px){
    max-width : 280px;
    grid-template-rows: repeat(2, 40px);
  }
`
type ProgressProps = {
    enable : boolean
}

const Text = styled.p`
  font-size : 0.75rem;
  color : ${(props : ProgressProps) => props.enable ? `#63C2C6;` : `#DBDBDB;`};
  transition: color linear 0.5s;
  grid-column : span 1;
  grid-row : span 1;
  padding : 0;
  margin : 0;
  font-weight: bold;
  text-align: center;
`

const Section = styled.div`
  max-width : 40px;
  width : 100%;
  max-height : 40px;
  height : 100%;
  align-self: center;
  justify-self: center;
  //border : 4px solid ${(props : ProgressProps) => props.enable ? `#63C2C6;` : `transparent;`}
  color : ${(props : ProgressProps) => props.enable ? `#ffffff;` : `#DBDBDB;`};
  background-color : ${(props : ProgressProps) => props.enable ? `#63C2C6;` : `transparent;`};
  box-shadow : rgb(0 0 0 / 15%) 0px 0px 10px;
  grid-column : span 1;
  grid-row : span 1;
  padding : 0;
  margin : 0;
  box-sizing: border-box;
  border-radius : 100%;
  font-weight : bold;
  display : flex;
  align-items: center;
  justify-content: center;
  transition: background-color linear 0.5s;
  @media(max-width: 500px){
    max-width : 30px;
    width : 100%;
    max-height : 30px;
    height : 100%;
    font-size : 0.5rem;
  }
`

const Empty = styled.div`
  grid-column: span 1;
`

const Bar = styled.div`
  grid-column : span 1;
  grid-row : span 1;
  border : 2px solid #63C2C6;
  background-color : #63C2C6;
  width : 70%;
  transform : ${(props : ProgressProps) => props.enable ? `scaleX(1);` : `scaleX(0);`};;
  transform-origin: left;
  height : 2px;
  padding : 0;
  margin : 0;
  box-sizing: border-box;
  border-radius: 50px;
  justify-self: center;
  transition: all linear 0.25s;
`


type Props = {
    status : Enum_RegisterProgress
}

const RegisterProgress = (props : Props) => {

    const [indicator, setIndicator] = useState([false, false, false, false])

    useEffect(()=>{
        setIndicator(() =>{
            return  [false, false, false, false].fill(true,0, props.status+1)
        })
    },[props.status])



    return (
        <Wrapper>
            <Text enable={indicator[0]}>이메일</Text><Empty/>
            <Text enable={indicator[1]}>아이디</Text><Empty/>
            <Text enable={indicator[2]}>암호</Text><Empty/>
            <Text enable={indicator[3]}>완료</Text>
            <Section enable={indicator[0]}>1</Section>
            <Bar enable={indicator[1]}></Bar>
            <Section enable={indicator[1]}>2</Section>
            <Bar enable={indicator[2]}></Bar>
            <Section enable={indicator[2]}>3</Section>
            <Bar enable={indicator[3]}></Bar>
            <Section enable={indicator[3]}>4</Section>
        </Wrapper>
    )
}

export default RegisterProgress
