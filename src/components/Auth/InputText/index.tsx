import styled from "styled-components";
import {useState, useEffect, useRef, memo} from "react";

type WrapperPropsType = {
    width : string
}

const Wrapper = styled.label`
  width : ${(props: WrapperPropsType) => props.width+";"};
  display : flex;
  height : 3.2rem;
  position : relative;
`

type LabelPropsType = {
    typing : boolean
}

const Label = styled.span`
  position : absolute;
  user-select: none;
  left : 8px;
  line-height: 2.2rem;
  font-size : 0.75rem;
  color : rgb(142,142,142);
  font-family: 'Noto Sans KR', sans-serif;
  transition : all ease .1s;
  transform-origin: left;
  z-index: 30;
  transform: ${(props: LabelPropsType) => props.typing ? "scale(0.8333) translateY(-0.85rem);" : "scale(1) translateY(0);"};
`

type ErrorMsgType = {
    error? : boolean
}

const ErrorMsg = styled.span`
  position : absolute;
  user-select: none;
  left : 8px;
  bottom : 0;
  font-size : 0.75rem;
  color : #ff7961;
  transition : all ease .15s;
  transform-origin: left;
  z-index : 10;
  font-weight: bold;
  white-space: nowrap;
  font-family: 'Noto Sans KR', sans-serif;
  opacity: ${(props: ErrorMsgType) => props.error ? "1;" : "0;"};
  transform: ${(props: ErrorMsgType) => props.error ? "scale(0.8333) translateY(0rem);" : "scale(0.8333) translateY(-1rem);"};
`

type ComponentPropsType = {
    typing : boolean
    error? : boolean
}

const Component = styled.input`
  width : 100%;
  height : 2.2rem;
  background: #ffffff;
  border : 0;
  border-bottom : 2px solid ${(props: ComponentPropsType) => props.error ?  "#ff7961;" : "#AEDFE1;"};
  margin-bottom: 1rem;
  padding : ${(props: ComponentPropsType) => props.typing ? "1rem 0 0.125rem 0.5rem;" : "0.5rem;"};
  box-sizing: border-box;
  outline: none;
  z-index: 20;
  color : #373737;
  font-family: 'Noto Sans KR', sans-serif;
  font-size : 0.75rem;
  position : absolute;
  
  &:focus{
    border-bottom : 2px solid ${(props: ComponentPropsType) => props.error ? "#ff3333;" : "#63C2C6;"};
    
  }
`



export type Props = {
    width : string
    label : string
    type : string
    value : string
    onChange : (e:React.ChangeEvent<HTMLInputElement>) => void
    autoFocus? : boolean
    error? : boolean
    errorMsg? : string

}

const InputText = (props : Props) => {

    const [isTyping, setIsTyping] = useState(false)
    const inputRef = useRef<HTMLInputElement | null>(null)

    useEffect(()=>{
        if(inputRef.current && props.autoFocus){
            inputRef.current.focus();
        }
        // eslint-disable-next-line
    },[])

    useEffect(()=>{
        if(props.value.length > 0) setIsTyping(true)
        else setIsTyping(false)
    }, [props.value, setIsTyping])


    return <Wrapper width={props.width}>
        <Label typing={isTyping}>{props.label}</Label>
        <Component ref={inputRef} error={props.error} typing={isTyping} onChange={props.onChange} value={props.value} type={props.type} autoComplete={"on"} autoCapitalize={"off"}/>
        <ErrorMsg error={props.error}>{props.errorMsg}</ErrorMsg>
    </Wrapper>
}

export default memo(InputText)


