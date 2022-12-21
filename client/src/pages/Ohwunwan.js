import { Fragment } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

// components
import Menu from "../components/Menu";
import Main from "../components/Main"
import Sidebar from "../components/Sidebar";

// dummy
import MenuModal from "../components/MenuModal";
import SignupPage from "./SignupPage";
import LoginPage from "./LoginPage";

function Ohwunwan() {
  const state = useSelector(state => state)
  // console.log(state)

  const loginModal = useSelector(state => state.loginModal)
  // console.log(loginModal)

  return (
    <Fragment>
      <OhwunwanWrap>
        <Menu />
        <Main />
        <Sidebar />
        {loginModal ? <LoginPage />: null}
      </OhwunwanWrap>
      {/* <MenuModal /> */}
      {/* <SignupPage /> */}
    </Fragment>
  )
}

const OhwunwanWrap = styled.div`
  display: flex;
  font-size: 1.6rem;
`

export default Ohwunwan;