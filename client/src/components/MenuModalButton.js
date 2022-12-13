import styled from "styled-components";

function MenuModalButton({...props}) {
  return (
    <MenuButton {...props} name="" value="" type="submit">{props.buttonName}</MenuButton>
  )
}

const MenuButton = styled.button`
  color: ${props => props.buttonName === "신고" ? 
    props.theme.errorColor : 
    props.buttonName === "삭제" ? 
    props.theme.errorColor :
    props.theme.primaryText
  };
  font-weight: ${props => props.buttonName === "신고" ? 
    props.theme.fontBold : 
    props.buttonName === "삭제" ? 
    props.theme.fontBold :
    "none"
  };
`

export default MenuModalButton;