import React, {ChangeEvent} from "react"
import styled from "styled-components"
import Button from "../Button";
import ImagePreview from "./ImagePreview";
import TextBox from "./TextBox";
import Location from "./Location"

type WrapperProps = {
    isImageEmpty: boolean
}


const Wrapper = styled.form`
  width: 100%;
  height : auto;
  max-width: 800px;
  display : flex;
  flex-direction: column;
  gap: 0.625rem;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  transform: ${(props:WrapperProps)=> props.isImageEmpty ? "translateY(-7.25rem)" : "translateY(0)"};
  transition: .2s ease all;
  pointer-events: none;

  @media(max-width: 500px){
    transform: ${(props:WrapperProps)=> props.isImageEmpty ? "translateY(-6.25rem)" : "translateY(0)"};
  }
`



const ButtonWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  pointer-events: visible;
  margin-top: 0.5rem;
`

type Props = {
    editDate: string,
    imageUrls: string[]
    onFileChange: (e:ChangeEvent<any>)=>void
    onImageCheck: (e:any)=>void
    onDelete: (e:any)=>void
    onCancelClick: (e:any)=>void
    onSuccessClick: (e:any)=>void
    checkedImage: string[]
    fileInputRef: any
    textInputRef: any
    locationInputRef: any
    textBoxStatus: string
    locationBoxStatus: string
} & typeof defaultProps

const defaultProps = {
    editDate: "",
    imageUrls: [] as string[],
    onFileChange: (e:ChangeEvent<any>)=>{},
    onImageCheck: (e:any)=>{},
    onDelete: (e:any)=>{},
    onCancelClick: (e: any)=>{},
    onSuccessClick: (e:any)=>{},
    checkedImage: [] as string[],
    fileInputRef: null,
    textInputRef: null,
    locationInputRef: null,
    textBoxStatus: "stable",
    locationBoxStatus: "stable"
}

const Editor = (props: Props) => {


    return (
        <Wrapper isImageEmpty={props.imageUrls.length===0}>
            <ImagePreview editDate={props.editDate} imageUrls={props.imageUrls} onDelete={props.onDelete} checkedImage={props.checkedImage} onImageCheck={props.onImageCheck}/>
            <TextBox status={props.textBoxStatus} onFileChange={props.onFileChange} fileInputRef={props.fileInputRef} textInputRef={props.textInputRef}/>
            <Location status={props.locationBoxStatus} locationInputRef={props.locationInputRef}/>
            <ButtonWrapper>
                <Button type={"button"} types={"prev"} value={"취소"} onClick={props.onCancelClick}></Button>
                <Button type={"submit"} types={"next"} value={"완료"} status={true} onClick={props.onSuccessClick}></Button>
            </ButtonWrapper>
        </Wrapper>

    )
}

Editor.defaultProps = defaultProps

export default Editor
