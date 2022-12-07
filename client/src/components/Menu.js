import styled from "styled-components";

// components
import MenuButton from "./MenuButton";
import MenuName from "./MenuName";

function Menu() {
  const menuLists = [
    ["fa-dumbbell", "오운완"], 
    ["fa-ranking-star", "1RM"], 
    ["fa-comments", "피드백"],
    ["fa-square-plus", "만들기"],
    ["fa-user", "프로필"],
  ]

  return(
    <MenuWrap>
        {menuLists.map((arr, idx) => 
          <MenuRow key={idx}>
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
  /* color: ${props => props.theme.primaryText}; */
`

const MenuRow = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  /* border: 1px solid ${props => props.theme.elevatedSeparator}; */
  padding: 2rem;
`

const MenuRowLeft = styled.div`
  width: 4rem;
`

export default Menu;