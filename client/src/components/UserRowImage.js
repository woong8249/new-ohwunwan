import styled from "styled-components";

function UserRowImage({...props}) {
  return (
    <UserImage src={props.userImage} />
  )
}

const UserImage = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 3rem;
`

export default UserRowImage;