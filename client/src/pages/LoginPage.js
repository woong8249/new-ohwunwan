import { Fragment } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { ID, PASSWORD } from "../store/modules/login";


function LoginPage({...props}) {
  // state
  const login = useSelector(state => state.login)
  const dispatch = useDispatch()
  // console.log(login)

  return (
    <Fragment>
      <SignupBackground>
        <LoginModalWrap>
          <LoginSubject>Login</LoginSubject>
          <LoginForm>
            <LoginInput type="text" placeholder="아이디" onChange={(e) => {
              dispatch({type: ID, id: e.target.value})
            }}/>
            <LoginInput type="password" placeholder="패스워드" onChange={(e) => {
              dispatch({type: PASSWORD, password: e.target.value})
            }} />
            <LoginInput type="submit" value="로그인" onClick={(e) => {
              e.preventDefault()
              console.log("로그인 작동")
            }} />
            <div>
              <LoginSpan>계정이 없으신가요?</LoginSpan>
              <LoginSpan singup onClick={() => {
                console.log("가입하기")
              }}>가입하기</LoginSpan>
            </div>
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
  height: ${props => props.theme.modalLoginHeight};
  background-color: ${props => props.theme.primaryBackground};
  border: 1px solid ${props => props.theme.secondaryText};
`

const LoginSubject = styled.h2`
  text-align: center;
  font-size: ${props => props.theme.modalLoginSubject};
  padding: ${props => props.theme.modalLoginSubjectPadding};
  font-weight: ${props => props.theme.fontBold};
`

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${props => props.theme.modalLoginSubjectPadding};
`

const LoginInput = styled.input`
  box-sizing: border-box;
  width: ${props => props.theme.modalLoginInputWidth};
  padding: ${props => props.theme.modalLoginInputPadding};
  background-color: ${props => props.type === "submit" ? 
    props.theme.buttonSubmitColor :
    null
  };
  color: ${props => props.type === "submit" ? 
    props.theme.primaryBackground :
    null
  };
  margin-bottom: ${props => props.theme.modalLoginInputMargin};
`

const LoginSpan = styled.span`
  display: inline-block;
  margin-top: ${props => props.theme.modalLoginInputMargin};
  color: ${props => props.singup ? "blue" : null};
  margin-left: ${props => props.singup ? props.theme.modalLoginInputMargin : null};
  font-weight: ${props => props.singup ? props.theme.fontBold : null};
  cursor: ${props => props.singup ? "pointer" : null};
`

export default LoginPage;