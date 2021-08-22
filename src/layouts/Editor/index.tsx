import React, {ReactNode} from "react"
import styled from "styled-components"

const Layout = styled.div`
  width: 100%;
  height: 100%;
  display : flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0 2rem;
`

type Props = {
    children : ReactNode
}

const EditorLayout = (props:Props) => {
    return (
        <Layout>
            {props.children}
        </Layout>
    )
}

export default EditorLayout