import styled from "styled-components";

function MenuButton({...props}) {
  return(
    <i className={`fa-solid ${props.menuName} fa-xl`}></i>
  )
}

export default MenuButton;