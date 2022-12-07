import styled from "styled-components";

function UserRowState({...props}) {
  return (
    <UserLogin {...props}></UserLogin>
  )
}

const UserLogin = styled.span`
  width: 0.6rem;
  height: 0.6rem;
  background-color: ${props => props.userState ? "#31a24c" : "#c0392b"};
  display: inline-block;
  border-radius: 0.6rem;
  position: absolute;
  bottom: 0;
  right: 0.3rem;
  border: 0.2rem solid #fff;
`

export default UserRowState;