import React, {ReactNode} from "react"
import styled from "styled-components"

const Layout = styled.div`
  width: 100%;
  height: 100%;
  display : flex;
  justify-content: center;
  box-sizing: border-box;
  margin-top: 2.5rem;

  @media(max-width: 768px){
    flex-direction: column;
    margin-top: 0;
}
`

type Props = {
    children : ReactNode
}

const PostLayout = (props:Props) => {
    return (
        <Layout>
            {props.children}
        </Layout>
    )
}

export default PostLayout