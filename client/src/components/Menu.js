import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

// components
import MenuButton from "./MenuButton";
import MenuName from "./MenuName";

// actionTypes
import { LOGIN_MODAL } from "../store/modules/loginModal";

// icons
import ohwunwan from "../assets/icons/arm-muscle.png"
import onerm from "../assets/icons/ranking.png"
import feedback from "../assets/icons/feedback.png"
import post from "../assets/icons/add-button.png"
import profile from "../assets/icons/circle-user-solid.svg"

function Menu() {
  // state
  const user = useSelector(state => state.user);
  const loginState = useSelector(state => state.loginState);
  const dispatch = useDispatch();

  const menuLists = [
    [ohwunwan, "오운완"], 
    [onerm, "1RM"], 
    [feedback, "피드백"],
    [post, "만들기"],
    [profile, "프로필"],
    [user.picture, user.userId] // 로그인 확인용
  ]

  return(
    <MenuWrap>
        {menuLists.map((arr, idx) => 
          
          <MenuRow key={idx} onClick={
            // * 프로필일 경우 && 로그인 되어 있지 않은 경우 && loginState가 false => onclick 작동
            arr[1] === "프로필" && loginState === false && user.userId === undefined ?
            () => {dispatch({type: LOGIN_MODAL, loginModal: true})}:
            // * 프로필일 경우 && 로그인 되어 있을 경우 && loginState가 false => onclick 작동시 마이페이지 이동
            arr[1] === "프로필" && loginState === false && user.userId !== undefined ?
            () => console.log("마이페이지 이동, 수정목록")
            // 그 외의 경우
            :null
          }>
            <MenuRowLeft>
              {/* 로그인 되어 있을 때 사진 없는 경우 */}
              { arr[1] === "프로필" && user.length !== undefined && user.picture === null ?  <MenuButton menuName={arr[0]} /> : 
              // 사진 있는 경우
              arr[1] === "프로필" && user.length !== undefined ? <MenuButton menuName={user.picture} /> :
              // 로그인 안되어 있을 경우
              <MenuButton menuName={arr[0]} />}
            </MenuRowLeft>
            <MenuName>{arr[1]}</MenuName>
          </MenuRow>
        )}
    </MenuWrap>
  )
}

const MenuWrap = styled.div`
  width: 30rem;
  height: 100vh;
  border: 1px solid ${props => props.theme.elevatedSeparator};
  position: fixed;
`

const MenuRow = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 2rem;
`

const MenuRowLeft = styled.div`
  width: 4rem;
  height: 3rem;
`

export default Menu;