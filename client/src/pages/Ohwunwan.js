import { Fragment } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

// components
import Menu from "../components/Menu";
import Main from "../components/Main"
import Sidebar from "../components/Sidebar";

// modal
import SignupPage from "./SignupPage";
import LoginPage from "./LoginPage";

function Ohwunwan() {
  // state
  const state = useSelector(state => state);
  const loginModal = useSelector(state => state.loginModal);
  const signupModal = useSelector(state => state.signupModal);
  // console.log(state);

  return (
    <Fragment>
      <OhwunwanWrap>
        <Menu />
        <Main />
        <Sidebar />
        {loginModal ? <LoginPage />: null}
        {signupModal ? <SignupPage /> : null}
      </OhwunwanWrap>
      <SignupPage />
    </Fragment>
  )
}

const OhwunwanWrap = styled.div`
  display: flex;
  font-size: 1.6rem;
`

export default Ohwunwan;