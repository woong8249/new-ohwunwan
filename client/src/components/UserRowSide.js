import { Fragment, useState, useEffect } from "react";
import styled from "styled-components";

// components
import UserRowImage from "./UserRowImage";
import UserRowName from "./UserRowName";
import UserRowState from "./UserRowState";

function UserRowSide({...props}) {
  const [onUsers, isOnUsers] = useState({})

  useEffect(() => {
    isOnUsers(props)
  }, [])

  // console.log(onUsers)

  return (
    <Fragment>
      {onUsers.onlineUsers && onUsers.onlineUsers.map((obj, idx) =>
        <UserRowWrap key={idx}>
          <UserRowLeft>
            <UserRowImage userImage={obj.userImage} />
            {props.sidebar ? <UserRowState userState={obj.userOnline} /> : null}
          </UserRowLeft>
          <UserRowRight>
            <UserRowName userName={obj.userName} />
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
  padding: ${props => props.theme.sidebarPadding};
  cursor: pointer;
`

const UserRowLeft = styled.div`
  margin-left: 0.8rem;
  position: relative;
  height: 3rem;
`

const UserRowRight = styled.div`
`



export default UserRowSide;