import styled from "styled-components";

function UserRowButton({...props}) {
  // console.log(props) // {modalOpen: false, setModalOpen: ƒ}
  return (
    <i className="fa-solid fa-ellipsis fa-xl" onClick={() => props.setModalOpen(!props.modalOpen)}></i>
  )
}

const Button = styled.span`
`

export default UserRowButton;