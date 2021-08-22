import React, {memo} from "react"
import styled from "styled-components"
import { MdDelete} from "react-icons/md"
import {AiTwotoneCalendar} from "react-icons/ai"


type ImageCheckedProps = {
    isChecked: boolean
}

type ImageEmptyProps = {
    isImageEmpty: boolean
}

const IconWrapper = styled.div`
  opacity: ${(props:ImageCheckedProps)=>props.isChecked ? 1 : 0};
  visibility: ${(props:ImageCheckedProps)=>props.isChecked ? "visible" : "hidden"};
  cursor: pointer;
  pointer-events: visible;
`


const HeadWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  transform: ${(props:ImageEmptyProps)=> props.isImageEmpty ? "translateY(7.25rem)" : "translateY(0)"};
  transition: .2s ease all;
  pointer-events: visible;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
  
  @media(max-width: 500px){
    transform: ${(props:ImageEmptyProps)=> props.isImageEmpty ? "translateY(6.25rem)" : "translateY(0)"};
  }
`

const ImageWrapper = styled.div`
  transform: ${(props:ImageEmptyProps)=> props.isImageEmpty ? "translateY(7.25rem)" : "translateY(0)"};
  opacity: ${(props:ImageEmptyProps)=> props.isImageEmpty ? "0" : "1"};
  visibility: ${(props:ImageEmptyProps)=>props.isImageEmpty ? "hidden" : "visible"};
  pointer-events: visible;
  width: 100%;
  height: 6.3rem;
  display: flex;
  gap: 1rem;
  overflow-x: scroll;
  -webkit-overflow-scrolling:touch;
  scroll-snap-type: x mandatory;
  box-sizing: border-box;
  transition: .2s ease all;
  padding: 0;

  @media(max-width: 500px){
    height: 5.3rem;
    transform: ${(props:ImageEmptyProps)=> props.isImageEmpty ? "translateY(6.25rem)" : "translateY(0)"};
  }
  
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

  &::-webkit-scrollbar-track-piece {
    background: transparent;
  }

  &::-webkit-scrollbar-track {
    border-radius: 8px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 8px;
  }
`

const DateWrapper = styled.span`
  font-size: 0.875rem;
  font-family: 'Noto Sans KR', sans-serif;
  color : rgb(52,58,64);
  white-space: nowrap;
  display: flex;
  align-items: center;
  pointer-events: visible;
  gap: 0.25rem;
`

type ImageBlockProps = {
    isChecked : boolean
}

const ImageBlock = styled.div`
  width: auto;
  height: auto;
  scroll-snap-align: end;
  box-sizing: border-box;
  opacity: ${(props:ImageBlockProps)=>props.isChecked ? "0.2":"1" };
  cursor: pointer;
`

const PreviewImage = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 0.3rem;
  object-fit: cover;
  
  @media(max-width: 500px){
    width: 5rem;
    height: 5rem;
  }
`

type Props = {
    imageUrls: string[]
    onImageCheck: (e:any)=>void
    onDelete: (e:any)=>void
    checkedImage: string[]
    editDate: string
} & typeof defaultProps

const defaultProps = {
    imageUrls: [] as string[],
    onImageCheck: (e:any)=>{},
    onDelete: (e:any)=>{},
    checkedImage: [] as string[],
    editDate: ""
}

const ImagePreview = (props: Props) => {


    return (
        <>
            <HeadWrapper isImageEmpty={props.imageUrls.length===0}>
                <DateWrapper><AiTwotoneCalendar size={16} color={"rgb(52,58,64)"}/>{props.editDate}</DateWrapper>
                <IconWrapper isChecked={props.checkedImage.length!==0}>
                    <MdDelete onClick={props.onDelete} size={30} color={"#f05650"}/>
                </IconWrapper>
            </HeadWrapper>
            <ImageWrapper isImageEmpty={props.imageUrls.length===0}>
                {
                    props.imageUrls.map((i,index)=>{
                        return <ImageBlock isChecked={props.checkedImage.includes(index+"")} key={index} onClick={props.onImageCheck} data-key={index}><PreviewImage src={i}/></ImageBlock>
                    })
                }

            </ImageWrapper>
        </>


    )
}

ImagePreview.defaultProps = defaultProps

export default memo(ImagePreview)
