import React, {memo} from "react"
import styled, {css, keyframes} from "styled-components"
import { MdLocationOn } from "react-icons/md"

const ErrorAnimation = keyframes`
  0% {
    transform: rotate(-2deg);
  }
  20% {
    transform: rotate(1deg);
  }
  90% {
    transform: rotate(0deg);
  }
`;

type WrapperProps = {
    status: string
}


const ContentWrapper = styled.div`
  width: 100%;
  height: auto;
  display : flex;
  gap: 0.5rem;
  border-radius: 0.5rem;
  padding: 0.65rem;
  box-shadow : rgb(0 0 0 / 15%) 0px 0px 10px;
  box-sizing: border-box;
  pointer-events: visible;
  ${(props:WrapperProps)=>{
    if(props.status==="error")
      return css`
        animation: ${ErrorAnimation} 0.15s forwards;
      `
  }}
`

const LocationTitle = styled.div`
  width: 6rem;
  height: auto;
  font-size: 14px;
  font-family: 'Noto Sans KR', sans-serif;
  color : rgb(52,58,64);
  display: flex;
  justify-content: center;
  align-items: center;
  gap:0.25rem;
  user-select: none;
  @media(max-width: 500px){
    width: 5rem;
  }
`

const LocationInput = styled.input`
  flex-grow: 1;
  height: auto;
  padding: 0;
  margin: 0;
  outline : 0;
  box-sizing: border-box;
  border-radius: 8px;
  overflow: auto;
  resize: none;
  color : rgba(52,58,64, 0.9);
  padding: 0.2rem;
  border: none;
  font-size: 14px;
  font-family: 'Noto Sans KR', sans-serif;
  line-height:1.5;
  pointer-events: visible;
`

type Props = {
    locationInputRef: any
    status: string
} & typeof defaultProps

const defaultProps = {
    locationInputRef: null,
    status: "stable"
}

const Location = (props: Props) => {


    return (

        <ContentWrapper status={props.status}>
            <LocationTitle><MdLocationOn size={16} color={"rgb(52,58,64)"}/>장소</LocationTitle>
            <LocationInput ref={props.locationInputRef} spellCheck={false} placeholder={"장소를 설정해주세요"}></LocationInput>
        </ContentWrapper>


    )
}

Location.defaultProps = defaultProps

export default memo(Location)
