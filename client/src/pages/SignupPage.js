import { Fragment, useRef } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

// redux
import { ID, PASSWORD, PASSWORD2 } from "../store/modules/signup"
import { SIGNUP_MODAL } from "../store/modules/signupModal";
import { ADD_SIGNUPERROR } from "../store/modules/signupError";
import { ADD_LOGINERROR } from "../store/modules/loginError"; 

// utils
import hideInvalid from "../utils/hideInvalid";

function SignupPage({...props}) {
  // state
  const signup = useSelector(state => state.signup);
  const signupError = useSelector(state => state.signupError);
  const dispatch = useDispatch();
  // console.log(signup);

  // useRef
  const outSection = useRef();

  // input invalid 메시지 숨기기
  hideInvalid();

  return (
    <Fragment>
      <SignupBackground ref={outSection} onClick={(e) => {
        if(outSection.current === e.target) {
          dispatch({type: SIGNUP_MODAL, signupModal: false});
          dispatch({type: ADD_SIGNUPERROR, signupError: null});
          dispatch({type: ADD_LOGINERROR, loginError: null});
        }
      }}>
        <SignupModalWrap>
          <SignupSubject>Sign Up</SignupSubject>
          <SignupForm
            action={process.env.REACT_APP_DB_HOST + "/user/signup"}
            method="post"
            accept-charset="UTF-8"
          >
            <SignupInput 
              type="text"
              placeholder="아이디"
              pattern="^([a-z0-9]){6,10}$" // 영문소문자, 숫자 6-10자리
              autoFocus // 페이지가 열릴 때 처음으로 포커스가 이동하도록 세팅
              required
              onChange={(e) => {
                dispatch({type: ID, id: e.target.value})
              }}
            ></SignupInput>
            <SignupInput 
              type="password"
              placeholder="패스워드"
              pattern="^[a-zA-Z0-9!@#$%^*+=-]{5,10}$" // 영문대소문자, 숫자, 특수문자, 5-10자리
              required
              onChange={(e) => {
                dispatch({type: PASSWORD, password: e.target.value})
              }}
            ></SignupInput>
            <SignupInput 
              type="password"
              placeholder="패스워드 확인"
              pattern="^[a-zA-Z0-9!@#$%^*+=-]{5,10}$" // 영문대소문자, 숫자, 특수문자, 5-10자리
              required
              onChange={(e) => {
                dispatch({type: PASSWORD2, password2: e.target.value})
              }}
            ></SignupInput>
            <SignupInput 
              type="submit"
              value="회원가입"
              onClick={(e) => {
                e.preventDefault(); // 새로고침 방지
                axios.post(`${process.env.REACT_APP_DB_HOST}/user/signup`, 
                  {userId: signup.id, password: signup.password, passwordConfirmation: signup.password2}
                )
                .then(response => {
                  // console.log(response.data)
                  dispatch({type: SIGNUP_MODAL, signupModal: false});
                  dispatch({type: ID, id: null});
                  dispatch({type: PASSWORD, password: null});
                  dispatch({type: PASSWORD2, password2: null});
                  dispatch({type: ADD_SIGNUPERROR, signupError: null});
                })    
                .catch(error => {
                  console.log(error)
                  dispatch({type: ADD_SIGNUPERROR, signupError: error.response.data.message})
                })
              }}
            ></SignupInput>
            { signupError === "passwordConfirmation field must have the same value as the password field" ?
              <SignupSpan>🚫 비밀번호가 일치하지 않습니다</SignupSpan> :
              signupError === "Already exists" ?
              <SignupSpan>🚫 이미 존재하는 아이디입니다</SignupSpan> :
              signupError === "Please provide password at least 5 characters" ?
              <SignupSpan>🚫 비밀번호를 5자 이상 입력하세요</SignupSpan> :
              null
            }
          </SignupForm>    
        </SignupModalWrap>
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

const SignupModalWrap = styled.div`
  width: ${props => props.theme.modalWidth};
  height: ${props => props.theme.modalLoginHeight};
  background-color: ${props => props.theme.primaryBackground};
  border: 1px solid ${props => props.theme.secondaryText};
`

const SignupSubject = styled.h2`
  text-align: center;
  font-size: ${props => props.theme.modalLoginSubject};
  padding: ${props => props.theme.modalLoginSubjectPadding};
  font-weight: ${props => props.theme.fontBold};
`

const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${props => props.theme.modalLoginSubjectPadding};
`

const SignupInput = styled.input`
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
  cursor: ${props => props.type === "submit" ? "pointer" : null}
`

const SignupSpan = styled.span`
  display: inline-block;
  margin-top: ${props => props.theme.modalLoginInputMargin};
  color: ${props => props.theme.errorColor};
  font-weight: ${props => props.theme.fontBold};
`

export default SignupPage;