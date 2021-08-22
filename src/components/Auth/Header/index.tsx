import React from "react"
import styled from "styled-components";
import {ReactComponent as BackIcon} from "../../../img/back.svg";

const Component = styled.header`
    width : 100%;
    height : 2.75rem;
    background : #ffffff;
    border-bottom: rgb(219,219,219) solid 1px;
    font-family: 'Noto Sans KR', sans-serif;
    font-size : 1rem;
    display : none;
    margin-bottom: 1.5rem;
    @media(max-width: 500px){
      display : block;
    }
`

const Wrapper = styled.div`
    display : flex;
    width : 100%;
    height : 100%;
    justify-content: center;
    align-items: center;
`

const Text = styled.p`
  width : 90%;
  text-align: center;
  font-weight: bold;
`

const Back = styled.div`
  width : 1rem;
  height : 1rem;
  cursor : pointer;
`

type Props = {
    onClick? : ()=>void
}

const Header = (props : Props) => {
        return (
            <Component>
                <Wrapper>
                    <Back onClick={props.onClick}>
                        <BackIcon></BackIcon>
                    </Back>
                    <Text>가입</Text>
                </Wrapper>
            </Component>
        )
}

export default Header