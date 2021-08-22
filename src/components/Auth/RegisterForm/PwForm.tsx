import React from "react"
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
    pw : string
    rePw : string
    pwError : boolean
    pwErrorMsg : string
    rePwError : boolean
    rePwErrorMsg : string
    onClickPrevBtn : () => void
    onClickPwSubmitBtn : (e: React.FormEvent<HTMLInputElement>)=> void
    onChangePw : (e:React.ChangeEvent<HTMLInputElement>) => void
    onChangeRePw : (e:React.ChangeEvent<HTMLInputElement>) => void
    pwBtnStatus : boolean

}



const PwForm = (props : Props) => {
    return (
        <>
            <Text>비밀번호를 입력해주세요</Text>
            <Form>
                <InputText autoFocus={true} error={props.pwError} errorMsg={props.pwErrorMsg}  width={"75%"} label={"비밀번호"} value={props.pw} onChange={props.onChangePw} type={"password"}/>
                <InputText error={props.rePwError} errorMsg={props.rePwErrorMsg} width={"75%"} label={"비밀번호 확인"} value={props.rePw} onChange={props.onChangeRePw} type={"password"}/>
                <ButtonLayout>
                    <Button status={props.pwBtnStatus} onClick={props.onClickPrevBtn} value={"이전"} type={"button"} types={"prev"}/>
                    <Button status={props.pwBtnStatus} onClick={props.onClickPwSubmitBtn} value={"다음"} type={"submit"} types={"next"}/>
                </ButtonLayout>
            </Form>
        </>
    )
}

export default PwForm