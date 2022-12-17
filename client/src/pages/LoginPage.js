import { Fragment } from "react";
import styled from "styled-components";

function LoginPage() {
  return (
    <Fragment>
      <SignupBackground>
        <LoginModalWrap>
          <LoginSubject>Login</LoginSubject>
          <LoginForm>
            <LoginInput type="text" placeholder="아이디" />
            <LoginInput type="password" placeholder="패스워드" />
            <LoginInput type="submit" value="로그인" />
          </LoginForm>
        </LoginModalWrap>
      </SignupBackground>
    </Fragment>
  )
}

const SignupBackground = styled.div`
  font-size: 1.6rem;
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.modalBackground};
  z-index: 99;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LoginModalWrap = styled.div`
  width: ${props => props.theme.modalWidth};
  height: ${props => props.theme.modalHeight};
  background-color: ${props => props.theme.primaryBackground};
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  border: 1px solid ${props => props.theme.secondaryText};
`

const LoginSubject = styled.h2`
`

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const LoginInput = styled.input`
  width: 20rem;
  padding: 0.5rem;
`

export default LoginPage;