import { Fragment } from "react";
import styled from "styled-components";

// components
import UserRowImage from "./UserRowImage";
import UserRowName from "./UserRowName";
import UserRowState from "./UserRowState";

// dummy
import userImage from "../assets/icons/circle-user-solid.svg";

function UserRow({...props}) {
  const userLists = [
    ["손흥민", userImage, 1],
    ["이강인", userImage, 1],
    ["조규성", userImage, 0],
    ["황희찬", userImage, 1],
    ["김민재", userImage, 0],
  ]

  return (
    <Fragment>
      {userLists.map((arr, idx) =>
        <UserRowWrap key={idx}>
          <UserRowLeft>
            <UserRowImage userImage={arr[1]} />
            {props.sidebar ? <UserRowState userState={arr[2]} /> : null}
          </UserRowLeft>
          <UserRowRight>
            <UserRowName userName={arr[0]} />
          </UserRowRight>
        </UserRowWrap>
      )}
    </Fragment>
  )
}

const UserRowWrap = styled.div`
  &:hover{
    background-color: ${props => props.theme.elevatedSeparator};
  }
  display: flex;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
`

const UserRowLeft = styled.div`
  margin-left: 0.8rem;
  margin-right: 1rem;
  position: relative;
  height: 3rem;
`

const UserRowRight = styled.div`
`



export default UserRow;