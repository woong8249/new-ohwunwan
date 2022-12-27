import { Fragment, useRef, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

// redux
import { ID, PASSWORD, PASSWORD2 } from "../store/modules/signup"
import { SIGNUP_MODAL } from "../store/modules/signupModal";
import { ADD_SIGNUPERROR } from "../store/modules/signupError";
import { ADD_LOGINERROR } from "../store/modules/loginError"; 

// components
import InvalidIcon from "../components/InvalidIcon";
import Iframe from "../components/Iframe";

// utils
import hideInvalid from "../utils/hideInvalid";

function SignupPage({...props}) {
  // useState
  const [validity, setValidity] = useState({
    id: true,
    password1: true,
    password2: true 
  });

  // state
  const signup = useSelector(state => state.signup);
  const signupError = useSelector(state => state.signupError);
  const dispatch = useDispatch();
  // console.log(signup);

  // useRef
  const outSection = useRef();

  // input invalid 메시지 숨기기
  hideInvalid();

  // 로그인 모달창 높이
  const modalHeight = (arr) => {
    return arr.length < 2
  }

  // 모달창 높이를 정하는 변수들
  const variable = [validity.id, validity.password1, validity.password2].filter(ele => ele === true)  

  return (
    <Fragment>
      <SignupBackground ref={outSection} onClick={(e) => {
        if(outSection.current === e.target) {
          dispatch({type: SIGNUP_MODAL, signupModal: false});
          dispatch({type: ADD_SIGNUPERROR, signupError: null});
          dispatch({type: ADD_LOGINERROR, loginError: null});
        }
      }}>
        <SignupModalWrap increaseHeight={modalHeight(variable)}>
          <SignupSubject>Sign Up</SignupSubject>
          <SignupForm
            action={process.env.REACT_APP_DB_HOST + "/user/signup"}
            method="post"
            accept-charset="UTF-8"
            target="submitIframe"
          >
            <SignupFormRow>
              <SignupInput 
                type="text"
                placeholder="아이디"
                pattern="^([a-z0-9]){4,16}$" // 영문소문자, 숫자 4-16자리
                autoFocus // 페이지가 열릴 때 처음으로 포커스가 이동하도록 세팅
                required
                onBlur={(e) => {
                    if(e.target.validity.valid) {
                      setValidity({...validity, id: true})
                    } else {
                      setValidity({...validity, id: false})
                    }
                  }}
                onChange={(e) => {
                  dispatch({type: ID, id: e.target.value})
                }}
              ></SignupInput>
              {validity.id ? <InvalidIcon check /> : <InvalidIcon invalid />}
            </SignupFormRow>
            { !validity.id ? <LoginValidity>영문 소문자, 숫자(4~16자리)</LoginValidity> : null }

            <SignupFormRow>
              <SignupInput 
                type="password"
                placeholder="패스워드"
                pattern="^[a-zA-Z0-9!@#$%^*+=-]{4,16}$" // 영문대소문자, 숫자, 특수문자, 4-16자리
                required
                onBlur={(e) => {
                    if(e.target.validity.valid) {
                      setValidity({...validity, password1: true})
                    } else {
                      setValidity({...validity, password1: false})
                    }
                  }}
                onChange={(e) => {
                  dispatch({type: PASSWORD, password: e.target.value})
                }}
              ></SignupInput>
              {validity.password1 ? <InvalidIcon check /> : <InvalidIcon invalid />}
            </SignupFormRow>
            { !validity.password1 ? <LoginValidity>영문 대소문자, 숫자, !@#$%^*+=-(4~16자리)</LoginValidity> : null }
            
            <SignupFormRow>
              <SignupInput 
                type="password"
                placeholder="패스워드 확인"
                pattern="^[a-zA-Z0-9!@#$%^*+=-]{4,16}$" // 영문대소문자, 숫자, 특수문자, 4-16자리
                required
                onBlur={(e) => {
                    if(e.target.validity.valid) {
                      setValidity({...validity, password2: true})
                    } else {
                      setValidity({...validity, password2: false})
                    }
                  }}
                onChange={(e) => {
                  dispatch({type: PASSWORD2, password2: e.target.value})
                }}
              ></SignupInput>
              {validity.password2 ? <InvalidIcon check /> : <InvalidIcon invalid />}
            </SignupFormRow>
            { !validity.password2 ? <LoginValidity>영문 대소문자, 숫자, !@#$%^*+=-(4~16자리)</LoginValidity> : null }
            
            <SignupInput 
              type="submit"
              value="회원가입"
              onClick={() => {
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
                  console.log(error.response.data.message)
                  dispatch({type: ADD_SIGNUPERROR, signupError: error.response.data.message})
                })
              }}
            ></SignupInput>
            { signupError === "The userId must be 4 ~ 16 chars long" ?
              <SignupSpan>🚫 아이디를 확인해주세요(4~16자리)</SignupSpan> :
              signupError === "Tne password must be 4 ~ 16 chars long" ?
              <SignupSpan>🚫 비밀번호를 확인해주세요(4~16자리)</SignupSpan> :
              signupError === "This userId already exists" ?
              <SignupSpan>🚫 이미 존재하는 아이디입니다</SignupSpan> :
              signupError === "The userId must be consist of alphanum strings" ?
              <SignupSpan>🚫 사용할 수 없는 아이디입니다</SignupSpan> :
              signupError === "The passwordConfirmation field must have the same value as the password field" ?
              <SignupSpan>🚫 비밀번호가 일치하지 않습니다</SignupSpan> :
              null
            }
          </SignupForm>    
        </SignupModalWrap>
      </SignupBackground>
      <Iframe />
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
  height: ${props => props.increaseHeight ? props.theme.modalLoginHeight2 : props.theme.modalLoginHeight};
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

const SignupFormRow = styled.div`
  position: relative;
  display: flex;
  align-items: center;
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

const LoginValidity = styled.span`
  display: inline-block;
  color: ${props => props.theme.errorColor};
  margin-bottom: ${props => props.theme.modalLoginInputMargin};
`

export default SignupPage;