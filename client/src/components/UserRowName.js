import styled from "styled-components";

function UserRowName({...props}) {
  return (
    <UserRowText {...props}>{props.userName}</UserRowText>
  )
}

const UserRowText = styled.span`
`

export default UserRowName;