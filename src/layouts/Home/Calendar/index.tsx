import React, {ReactNode} from "react"
import styled from "styled-components"


const Layout = styled.div`
  margin : 0 auto;
  width: 100%;
  max-width: calc(844px + 4rem);
  margin-top: 2rem;
  padding: 0 2rem;
  box-sizing: border-box;
`

type Props = {
    children : ReactNode
}

const CalendarLayout = (props:Props) => {
    return (
        <Layout>
            {props.children}
        </Layout>
    )
}

export default CalendarLayout