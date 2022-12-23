import styled from "styled-components";

// icons
import check from "../assets/icons/check-button.png";
import invalid from "../assets/icons/delete-button.png";

function InvalidIcon({...props}) {
  return (
    <Invalid {...props} src={
      props.check ? check : 
      props.invalid ? invalid :
      null
      }>
    </Invalid>
  )
}

const Invalid = styled.img`
  width: ${props => props.theme.invalidIconWidth};
  height: ${props => props.theme.invalidIconWidth};
  /* padding: ${props => props.theme.modalLoginInputPadding}; */
  position: absolute;
  right: 0;
  margin-right: ${props => props.theme.invalidIconMargin};
`

export default InvalidIcon;