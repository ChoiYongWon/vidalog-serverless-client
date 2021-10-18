import React, {useEffect, useRef, useState} from "react"
import styled from "styled-components"
import {AiFillLeftCircle, AiFillRightCircle} from "react-icons/ai"
import { debounce } from "lodash"

const Wrapper = styled.div`
  width: 100%;
  max-width: 613px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ImageWrapper = styled.div`
  width: 100%;
  max-width: 613px;
  height: auto;
  position: relative;
`

const ImageScrollWrapper = styled.div`
  width: 100%;
  overflow-x: scroll;
  max-width: 613px;
  height: auto;
  scroll-snap-type: x mandatory;
  display: flex;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    height: 0.3rem;
    background: transparent;
  }

  &::-webkit-scrollbar-button{
    background: transparent;
  }

  &::-webkit-scrollbar-corner {
    background: transparent;
  }
`
type ImageCardProps = {
    imageUrl: string
}
const ImageCard = styled.div`
  flex: 0 0 100%;
  max-width: 613px;
  scroll-snap-align: start;
  padding-bottom: 100%;
  background-image: url(${(props:ImageCardProps)=>props.imageUrl});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

const PointerButton = styled.div`
  cursor: pointer;
  position: absolute;
  width: 30px;
  height: 30px;
  top: calc(50% - 15px);
  
`

type PointerButtonWrapper = {
    status: boolean
}

const RightButton = styled(PointerButton)`
  right: 0.5rem;
  display: ${(props:PointerButtonWrapper)=>props.status ? "block" : "none"};
  @media(max-width: 600px){
    display: none;
  }
`

const LeftButton = styled(PointerButton)`
  left: 0.5rem;
  display: ${(props:PointerButtonWrapper)=>props.status ? "block" : "none"};
  @media(max-width: 600px){
    display: none;
  }
`

const PageIndicator = styled.span`
  font-size: 14px;
  color: rgba(0,0,0,0.5);
  font-family: 'Noto Sans KR', sans-serif;
`

type Props = {
    imageUrls: string[]
}

const ImageViewer = (props: Props) => {

    const imageWrapperRef = useRef(document.createElement("div"))
    const [page, setPage] = useState(0)

    //버튼으로만 페이지 움직일때
    const [leftBtnStatus, setLeftBtnStatus] = useState(false)
    const [rightBtnStatus, setRightBtnStatus] = useState(false)

    useEffect(()=>{

        if(page>0) setLeftBtnStatus(true)
        else setLeftBtnStatus(false)
        if(page<props.imageUrls.length-1) setRightBtnStatus(true)
        else setRightBtnStatus(false)

    }, [page])

    const onRightClick = () => {
        imageWrapperRef.current.scrollLeft  = (imageWrapperRef.current.clientWidth * (page+1))
    }

    const onLeftClick = () => {
        imageWrapperRef.current.scrollLeft  = (imageWrapperRef.current.clientWidth * (page-1))
    }

    const debounceSomethingFunc = debounce((e:any) => {
        const currentPage = Math.ceil(imageWrapperRef.current.scrollLeft / (imageWrapperRef.current.clientWidth + 50))
        setPage(currentPage)

    }, 100);

    const onScroll = (e:any) => {
        debounceSomethingFunc(e)
    }

    return (
        <Wrapper>
            <ImageWrapper>
                <ImageScrollWrapper ref={imageWrapperRef} onScroll={onScroll}>
                    {
                        props.imageUrls.map((data)=>{
                            return <ImageCard imageUrl={data}/>
                        })
                    }
                </ImageScrollWrapper>
                <LeftButton status={leftBtnStatus} onClick={onLeftClick}>
                    <AiFillLeftCircle color={"rgba(255,255,255,0.6)"} size={30}/>
                </LeftButton>
                <RightButton status={rightBtnStatus} onClick={onRightClick}>
                    <AiFillRightCircle color={"rgba(255,255,255,0.6)"} size={30}/>
                </RightButton>

            </ImageWrapper>
            <PageIndicator>{page+1}/{props.imageUrls.length}</PageIndicator>
        </Wrapper>


    )
}

export default ImageViewer