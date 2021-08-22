import React from "react"
import styled from "styled-components";

const Container = styled.div`
  display : flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width : 100%;
  height : auto;
  gap : 1rem;
  box-sizing: border-box;
  
  @media(max-width: 500px){
    justify-content: flex-start;
  }
`

type AuthProps = {
    children : any
}

const AuthLayout = (props : AuthProps) => {
    return (
        <Container>
            {props.children}
        </Container>
    )
}

export default AuthLayout