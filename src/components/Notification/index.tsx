import React, {useEffect, useState} from "react"
import styled, {css, keyframes} from "styled-components"


const intro = keyframes`
  0% {
    opacity : 0;
    transform: translateY(-50px);
  }
  100% {
    opacity : 1;
    transform: translateY(0);
  }
`;

const outro = keyframes`
  0% {
    opacity : 1;
    transform: translateY(0);
  }
  100% {
    opacity : 0;
    transform: translateY(-50px);
  }
`;

type WrapperProps = {
    status: string
    isView: boolean
    unmount: boolean
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  animation: ${intro} 0.2s forwards;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 12px;
  white-space: nowrap;
  background: ${(props:WrapperProps)=>{
      switch(props.status){
        case "SUCCESS":
            return "#4CAF50"
        case "ERROR":
            return "#F44336"
        case "WARNING":
            return "#FFC107"
      }
  }};
  ${props=>{
    if(!props.isView) {
      return css`
          animation: ${outro} 0.2s forwards;
        `
    }
  }}
  color: white;
  padding: 0.5rem;
  display: ${(props: WrapperProps)=>props.unmount ? "none" : "flex"};
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`

type Props = {
    status: string
    text: string
    duration: number
    onUnMount: ()=>void
}

const Notification = (props:Props) => {

    const [isView, setIsView] = useState(true)
    const [unmount, setUnmount] = useState(false)

    useEffect(()=>{
        let time = setTimeout(()=>{
            setIsView(false)
        }, props.duration * 1000 + 200)
        return ()=>{
            clearTimeout(time)
        }
        // eslint-disable-next-line
    }, [])


    //unmount
    useEffect(()=>{
        let time: any;
        if(!isView){
            time = setTimeout(()=>{
                setUnmount(true)
                
            }, 200)
        }
        return ()=> {
            clearTimeout(time)
        }
    }, [isView])

    useEffect(()=>{
        return ()=>{
            props.onUnMount()
        }
        // eslint-disable-next-line
    }, [unmount])

    return (
        <Wrapper unmount={unmount} isView={isView} status={props.status}>
            {props.text}
        </Wrapper>
    )
}

export default Notification