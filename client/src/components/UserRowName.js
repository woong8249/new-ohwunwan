import styled from "styled-components";

function UserRowName({...props}) {
  return (
    <UserRowText {...props}>{props.userName}</UserRowText>
  )
}

const UserRowText = styled.span`
  margin-left: ${props => props.comment ? 0 : "1rem"};
  margin-right: ${props => props.comment ? "1rem" : 0};
  font-weight: ${props => props.theme.fontBold};
`

export default UserRowName;