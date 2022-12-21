import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

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
  const menuLists = [
    [ohwunwan, "오운완"], 
    [onerm, "1RM"], 
    [feedback, "피드백"],
    [post, "만들기"],
    [profile, "프로필"],
  ]

  const loginState = useSelector(state => state.loginState);
  const loginModal = useSelector(state => state.loginModal);
  const dispatch = useDispatch();

  // console.log(loginModal)
  
  return(
    <MenuWrap>
        {menuLists.map((arr, idx) => 
          
          <MenuRow key={idx} onClick={
            // * 프로필일 경우 && loginState가 false => onclick 작동
            arr[1] === "프로필" && loginState === false ?
            () => {dispatch({type: LOGIN_MODAL, loginModal: true})}:
            null
          }>
            <MenuRowLeft>
              <MenuButton menuName={arr[0]} />
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