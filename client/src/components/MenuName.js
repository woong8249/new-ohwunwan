import styled from "styled-components";

function MenuName({children, ...props}) {
  return(
    <MenuText {...props}>{children}</MenuText>
  )
}

const MenuText = styled.span`
  height: 3rem;
  display: inline-block;
  line-height: 3rem;
  /* font-weight: ${props => props.theme.fontBold}; */
`

export default MenuName;