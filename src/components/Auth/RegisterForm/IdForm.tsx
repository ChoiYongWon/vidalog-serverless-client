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

export type idStatusType = {

}

type Props = {
    id : string
    error : boolean
    errorMsg : string
    idBtnStatus : boolean
    onClickPrevBtn : () => void
    onClickIdSubmitBtn : (e : React.FormEvent<HTMLInputElement>) => void
    onChangeId : (e : React.ChangeEvent<HTMLInputElement>) => void
}


const IdForm = (props : Props) => {
    return (
        <>
            <Text>아이디를 입력해주세요</Text>
            <Form>
                <InputText error={props.error} errorMsg={props.errorMsg} autoFocus={true} width={"75%"} label={"아이디"} value={props.id} onChange={props.onChangeId} type={"text"}/>
                <ButtonLayout>
                    <Button status={props.idBtnStatus} onClick={props.onClickPrevBtn} value={"이전"} type={"button"} types={"prev"}/>
                    <Button status={props.idBtnStatus} onClick={props.onClickIdSubmitBtn} value={"다음"} type={"submit"} types={"next"}/>
                </ButtonLayout>
            </Form>
        </>
    )
}

export default IdForm