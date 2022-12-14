import { Fragment } from "react";
import styled from "styled-components";

// components
import UserRowImage from "./UserRowImage";
import UserRowName from "./UserRowName";
import UserRowButton from "./UserRowButton";

function UserRow({...props}) {
  return (
    <Fragment>
      <UserRowWrap>
        <UserRowLeft>
          <UserRowImage userImage={props.picture} />
          <UserRowName userName={props.nickname} />
        </UserRowLeft>
        <UserRowRight>
          <UserRowButton />
        </UserRowRight>
      </UserRowWrap>
    </Fragment>
  )
}

const UserRowWrap = styled.div`
  display: flex;
  align-items: center;
  padding: ${props => props.theme.articlePadding};
  justify-content: space-between;
`

const UserRowLeft = styled.div`
  height: 3rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`

const UserRowRight = styled.div`
  cursor: pointer;
`

export default UserRow;