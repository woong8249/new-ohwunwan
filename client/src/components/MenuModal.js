import styled from "styled-components";

// components
import MenuModalButton from "./MenuModalButton";

function MenuModal({...props}) {
  return(
    <MenuModalBackground>
      <MenuModalWrap>
        <MenuModalRow>
          <MenuModalButton buttonName="신고" />
        </MenuModalRow>
        <MenuModalRow>
          <MenuModalButton buttonName="삭제" />
        </MenuModalRow>
        <MenuModalRow>
          <MenuModalButton buttonName="게시물로 이동" />
        </MenuModalRow>
        <MenuModalRow>
          <MenuModalButton buttonName="취소" />
        </MenuModalRow>
      </MenuModalWrap>
    </MenuModalBackground>
  )
}

const MenuModalBackground = styled.div`
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

const MenuModalWrap = styled.div`
  width: ${props => props.theme.modalWidth};
  background-color: ${props => props.theme.primaryBackground};
  /* border-radius: ${props => props.theme.borderRadius}; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const MenuModalRow = styled.div`
  width: inherit;
  height: ${props => props.theme.modalRowHeight};
  background-color: inherit;
  display: flex;
  justify-content: center;
  align-content: center;
  border-bottom: 1px solid ${props => props.theme.tertiaryText};
  &:last-child {
    border-bottom: none;
  }
`

export default MenuModal