import React, {ReactNode} from "react"
import styled from "styled-components"


const Layout = styled.div`
  margin : 0 auto;
  width: 100%;
  max-width: calc(780px + 8rem);
  display : inline-flex;
  flex-direction: column;
  padding : 0 2rem;
  margin-top: 1rem;
  box-sizing: border-box;
`

type Props = {
    children : ReactNode
}

const DateIndicatorLayout = (props:Props) => {
    return (
        <Layout>
            {props.children}
        </Layout>
    )
}

export default DateIndicatorLayout