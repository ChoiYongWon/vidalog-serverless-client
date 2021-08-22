import React from "react"
import styled from "styled-components";
import Button from "../../Button";
// import Success from "../../../img/success.png"

// const SuccessImg = styled.img`
//   width : 25%;
//   height : auto;
//   margin-bottom: 2rem;
// `

const Text = styled.p`
  font-size : 1.125rem;
  font-weight : bold;
  color : #707070;
`


type Props = {
    onClickBtn : (e: React.FormEvent<HTMLInputElement>) => void
}


const SuccessForm = (props : Props) => {
    return (
        <>
            <Text>회원가입이 완료되었습니다.</Text>
            {/*<SuccessImg src={Success}/>*/}
            <Button onClick={props.onClickBtn} value={"홈으로"} type={"submit"} status={true} types={"next"}/>
        </>
    )
}

export default SuccessForm