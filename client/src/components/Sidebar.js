import styled from "styled-components";

// components
import UserRowSide from "./UserRowSide";

// dummy
import userImage from "../assets/icons/circle-user-solid.svg";

function Sidebar() {
  const userLists = {
    onlineUsers: [
      {
        userName: "손흥민",
        userImage: userImage,
        userOnline: 1
      },
      {
        userName: "이강인",
        userImage: userImage,
        userOnline: 1
      },
      {
        userName: "조규성",
        userImage: userImage,
        userOnline: 0
      },
      {
        userName: "황희찬",
        userImage: userImage,
        userOnline: 1
      },
      {
        userName: "김민재",
        userImage: userImage,
        userOnline: 0
      }
    ]
  }

  return (
    <SidebarWrap>
      <UserRowSide sidebar="sidebar" {...userLists} />
    </SidebarWrap>
  )
}

const SidebarWrap = styled.div`
  width: 30rem;
  height: 100vh;
  border: 1px solid ${props => props.theme.elevatedSeparator};
  position: fixed;
  right: 0;
`

export default Sidebar;