import styled from "styled-components";

function MenuButton({...props}) {
  return(
    <Menu src={props.menuName} />
  )
}

const Menu = styled.img`
  width: 3rem;
  height: 3rem;
`

export default MenuButton;