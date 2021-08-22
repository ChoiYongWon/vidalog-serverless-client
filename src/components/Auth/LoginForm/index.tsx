import styled from "styled-components";
import React from "react"
import Logo from "../../../img/logo.png"
import InputText from "../InputText";
import Button from "../../Button";


const Wrapper = styled.div`
  max-width : 350px;
  width : 100%;
  height : auto;
  padding : 1rem;
  font-family: 'Noto Sans KR', sans-serif;
  box-sizing: border-box;
  //box-shadow : rgb(0 0 0 / 15%) 0px 0px 10px;
  box-shadow: 0 20px 25px -5px rgba(0 0 0 / .10), 0 10px 10px 05px rgba(0 0 0 / .04);
  border-radius: 10px;
  display : flex;
  flex-direction: column;
  align-items: center;
  
  @media(max-width: 500px){
    box-shadow : none;

  }
`

const LogoImg = styled.img`
  width : 33%;
  height : auto;
  margin-bottom: 2rem;
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
  margin : 1rem 0 5.5rem;
`

const MenuWrapper = styled.div`
  display : flex;
  width : 75%;
  justify-content: space-between;
  
`

const Menu = styled.button`
  text-decoration: none;
  font-size : 0.75rem;
  color : #707070;
  outline : none;
  border : none;
  background : none;
  cursor: pointer;
  padding : 0;
`

type Props = {
    id: string
    pw : string
    error : boolean,
    errorMsg : string,
    onChangeId : (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    onChangePw : (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    loginBtnStatus : boolean
    onClickLoginBtn : (e : React.FormEvent<HTMLInputElement>) => void
    onClickFindBtn : () => void
    onClickRegisterBtn : () => void
}


const LoginForm = (props : Props) => {
    return (
        <Wrapper>
            <>
                <LogoImg src={Logo}/>
                <Form>
                    <InputText width={"75%"} label={"아이디"} value={props.id} onChange={props.onChangeId} type={"text"}/>
                    <InputText error={props.error} errorMsg={props.errorMsg} width={"75%"} label={"비밀번호"} value={props.pw} onChange={props.onChangePw} type={"password"}/>
                    <ButtonLayout>
                        <Button status={props.loginBtnStatus} value={"로그인"}
                                onClick={props.onClickLoginBtn} type={"submit"} types={"block"}>
                        </Button>
                    </ButtonLayout>



                </Form>
                <MenuWrapper>

                    <Menu onClick={props.onClickFindBtn}>계정을 잊으셨나요?</Menu>

                    <Menu onClick={props.onClickRegisterBtn}>회원가입</Menu>


                </MenuWrapper>
            </>

        </Wrapper>
    )
}

export default LoginForm