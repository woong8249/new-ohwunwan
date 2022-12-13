import { Fragment } from "react";
import styled from "styled-components";

function LoginPage() {
  return (
    <Fragment>
      <SignupBackground>
        <LoginModalWrap>

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid ${props => props.theme.secondaryText};
`

export default LoginPage;