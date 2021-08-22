import React, {ReactNode} from "react"
import styled from "styled-components"

const Layout = styled.div`
  width: 100%;
  height: 100%;
  display : flex;
  flex-direction: column;
  box-sizing: border-box;
`

type Props = {
    children : ReactNode
}

const HomeLayout = (props:Props) => {
    return (
        <Layout>
            {props.children}
        </Layout>
    )
}

export default HomeLayout