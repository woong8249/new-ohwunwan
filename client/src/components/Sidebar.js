import styled from "styled-components";

// components
import UserRow from "./UserRow";

function Sidebar() {
  return (
    <SidebarWrap>
      <UserRow sidebar="sidebar" />
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