import styled from "styled-components";
import {memo} from "react";

type ButtonProps = {
    status? : boolean
    types : string
    type : string
}

const Button = styled.input`
  
  ${(props : ButtonProps)=>{
    switch(props.types){
      case "block":
          return `
            width : 100%;
            height : 2.4rem;
            border-radius: 10rem;
            background: ${props.status ? "#63C2C6;" : "#AEDFE1;"};
            box-shadow : ${props.status? "rgb(0 0 0 / 15%) 0px 0px 8px;" : "none"};
          `
      case "prev":
          return `
            min-width : 6.5rem;
            height : 2.4rem;
            border-radius: 10rem;
            background: ${props.status ? "#e0e0e0;" : "#e0e0e0;"};
            box-shadow : ${props.status? "rgb(0 0 0 / 15%) 0px 0px 8px;" : "none"};
          `
      case "next":
          return `
            min-width : 6.5rem;
            height : 2.4rem;
            border-radius: 10rem;
            background: ${props.status ? "#63C2C6;" : "#AEDFE1;"};
            box-shadow : ${props.status? "rgb(0 0 0 / 15%) 0px 0px 8px;" : "none"};
          `
      case "text":
        return `
            min-width : 6.5rem;
            height : 2.4rem;
            border-radius: 10rem;
            background: transparent;
            color : #707070 !important;
          `
     default:
         return
    }
  }};
  
  
  border : none;
  color : white;
  font-size : 0.85rem;
  display : flex;
  justify-content: center;
  align-items: center;
  outline: 0;
  cursor : pointer;
`

export default memo(Button)