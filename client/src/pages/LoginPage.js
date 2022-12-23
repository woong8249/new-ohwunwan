import { Fragment, useRef } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

// redux
import { ID, PASSWORD } from "../store/modules/login";
import { LOGIN_MODAL } from "../store/modules/loginModal";
import { SIGNUP_MODAL } from "../store/modules/signupModal";
import { USERINFO } from "../store/modules/user";
import { ADD_LOGINERROR } from "../store/modules/loginError"; 
import { ADD_SIGNUPERROR } from "../store/modules/signupError";

// utils
import hideInvalid from "../utils/hideInvalid";

function LoginPage({...props}) {
  // state
  const login = useSelector(state => state.login);
  const loginError = useSelector(state => state.loginError);
  const dispatch = useDispatch();

  // useRef
  const outSection = useRef();

  // input invalid 메시지 숨기기
  hideInvalid();

  return (
    <Fragment>
      <LoginBackground ref={outSection} onClick={(e) => {
        if(outSection.current === e.target) {
          dispatch({type: LOGIN_MODAL, loginModal: false});
          dispatch({type: ADD_LOGINERROR, loginError: null});
          dispatch({type: ADD_SIGNUPERROR, signupError: null});
        }
      }}>
        <LoginModalWrap>
          <LoginSubject>Login</LoginSubject>
          <LoginForm
            action={process.env.REACT_APP_DB_HOST + "/user/signin"}
            method="post"
            accept-charset="UTF-8"
          >
            <LoginInput
              type="text" 
              placeholder="아이디"
              pattern="^([a-z0-9]){6,10}$" // 영문소문자, 숫자 6-10자리
              autoFocus // 페이지가 열릴 때 처음으로 포커스가 이동하도록 세팅
              required
              name="userId"
              onChange={(e) => {
                dispatch({type: ID, id: e.target.value})
              }}
            />
            <LoginInput 
              type="password" 
              placeholder="패스워드"
              pattern="^[a-zA-Z0-9!@#$%^*+=-]{5,10}$" // 영문대소문자, 숫자, 특수문자, 5-10자리
              required
              name="password"
              onChange={(e) => {
                dispatch({type: PASSWORD, password: e.target.value})
              }}
            />
            <LoginInput 
              type="submit" 
              value="로그인"
              onClick={(e) => {
                e.preventDefault(); // 새로고침 방지
                axios.post(`${process.env.REACT_APP_DB_HOST}/user/signin`,
                  {userId: login.id, password: login.password}
                )
                .then(response => {
                  // console.log(response.data)
                  dispatch({type: USERINFO, user: response.data});
                  dispatch({type: LOGIN_MODAL, loginModal: false});
                  dispatch({type: ADD_LOGINERROR, loginError: null});
                  dispatch({type: ID, id: null});
                  dispatch({type: PASSWORD, password: null});
                })
                .catch(error => {
                  // console.log(error)
                  dispatch({type: ADD_LOGINERROR, loginError: error.response.data.message});
                })
              }} 
            />
            <div>
              <LoginSpan>계정이 없으신가요?</LoginSpan>
              <LoginSpan singup 
                onClick={() => {
                  dispatch({type: LOGIN_MODAL, loginModal: false});
                  dispatch({type: SIGNUP_MODAL, signupModal: true});
                  dispatch({type: ID, id: null});
                  dispatch({type: PASSWORD, password: null});
                  dispatch({type: ADD_LOGINERROR, loginError: null});
                }}>가입하기</LoginSpan>
            </div>
            {loginError ? <LoginSpan error>🚫 아이디 혹은 비밀번호를 확인해주세요</LoginSpan> : null}          
          </LoginForm>
        </LoginModalWrap>
      </LoginBackground>
    </Fragment>
  )
}

const LoginBackground = styled.div`
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
  cursor: ${props => props.type === "submit" ? "pointer" : null}
`

const LoginSpan = styled.span`
  display: inline-block;
  margin-top: ${props => props.theme.modalLoginInputMargin};
  color: ${props => props.singup ? props.theme.buttonOnColor : props.error ? props.theme.errorColor : null};
  margin-left: ${props => props.singup ? props.theme.modalLoginInputMargin : null};
  font-weight: ${props => props.singup || props.error ? props.theme.fontBold : null};
  cursor: ${props => props.singup ? "pointer" : null};
`

export default LoginPage;