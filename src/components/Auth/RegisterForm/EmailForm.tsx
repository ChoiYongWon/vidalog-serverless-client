import React, {memo} from "react"
import styled from "styled-components";
import Button from "../../Button";
import InputText from "../InputText";


const Text = styled.p`
  font-size : 1.25rem;
  font-weight : bold;
  color : #707070;
`
const Form = styled.form`
  width : 100%;
  height : auto;
  display : flex;
  flex-direction: column;
  align-items: center;
`

const ButtonLayout = styled.div`
  width : 75%;
  height : auto;
  display : flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0 0;
`



type Props = {
    email : string
    authCode : string
    emailError : boolean
    emailErrorMsg : string
    codeError : boolean
    codeErrorMsg : string
    authorization : boolean
    emailBtnStatus : boolean
    onClickEmailSubmitBtn : (e: React.FormEvent<HTMLInputElement>)=> void
    onClickPrevBtn : ()=>void
    onChangeEmail : (e : React.ChangeEvent<HTMLInputElement>) => void
    onChangeCode : (e : React.ChangeEvent<HTMLInputElement>) => void
}


const EmailForm = (props : Props) => {
    return (
            <>
                <Text>이메일을 입력해주세요</Text>
                <Form>
                    <InputText autoFocus={true} error={props.emailError} errorMsg={props.emailErrorMsg}  width={"75%"} label={"이메일"} onChange={props.onChangeEmail} value={props.email} type={"text"}/>
                    {
                        props.authorization ? <InputText autoFocus={true} error={props.codeError} errorMsg={props.codeErrorMsg}  width={"75%"} label={"인증번호"} onChange={props.onChangeCode} value={props.authCode} type={"text"}/> : null
                    }
                    <ButtonLayout>
                        <Button types={"prev"} status={props.emailBtnStatus} onClick={props.onClickPrevBtn} value={"이전"} type={"button"}/>
                        <Button types={"next"} status={props.emailBtnStatus} onClick={props.onClickEmailSubmitBtn} value={"완료"} type={"submit"}/>
                    </ButtonLayout>

                </Form>
            </>
    )
}

export default memo(EmailForm)