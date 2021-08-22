import React from "react"
import styled from "styled-components"

type ComponentProps = {
    size: string
    color: string
}

const Component = styled.span`
  font-size: ${(props: ComponentProps)=>props.size};
  font-family: 'Noto Sans KR', sans-serif;
  color: ${(props: ComponentProps)=>props.color};
  user-select: none;
  margin : 0.3rem 0;
`

const defaultProps = {
    value: "",
    size: "1rem",
    color: "rgb(52,58,64)"
}


type Props = {
    value: string
    size: string
    color: string
} & typeof defaultProps



const Text = (props: Props) => {
    return <Component size={props.size} color={props.color}>{props.value}</Component>
}

Text.defaultProps = defaultProps

export default Text