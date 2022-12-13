import { Fragment } from "react";
import styled from "styled-components";

// components
import Menu from "../components/Menu";
import Main from "../components/Main"
import Sidebar from "../components/Sidebar";

// dummy
import MenuModal from "../components/MenuModal";
import SignupPage from "./SignupPage";
import LoginPage from "./LoginPage";

function Ohwunwan() {
  return (
    <Fragment>
      <OhwunwanWrap>
        <Menu />
        <Main />
        <Sidebar />
      </OhwunwanWrap>
      {/* <MenuModal /> */}
      {/* <SignupPage /> */}
      {/* <LoginPage /> */}
    </Fragment>
  )
}

const OhwunwanWrap = styled.div`
  display: flex;
  font-size: 1.6rem;
`

export default Ohwunwan;