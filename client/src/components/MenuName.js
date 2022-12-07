import styled from "styled-components";

function MenuName({children, ...props}) {
  return(
    <MenuText {...props}>{children}</MenuText>
  )
}

const MenuText = styled.span`
  
`

export default MenuName;