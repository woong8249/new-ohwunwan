import { Fragment } from "react";
import styled from "styled-components";

// icons
import leftChevron from "../assets/icons/left-chevron.png"
import rightChevron from "../assets/icons/right-chevron.png"

function ArticleChevron({...props}) {
  return (
    <Fragment>
      <Chevron {...props} />
    </Fragment>
  )
}

const Chevron = styled.div`
  background-repeat: no-repeat;
  background-position: ${props => props.left ? "-130px -98px" : props.right? "-162px -98px" : null};
  background-image: url(https://static.cdninstagram.com/rsrc.php/v3/y5/r/TJztmXpWTmS.png);
  height: 30px;
  width: 30px;
  position: absolute;
  left: ${props => props.left ? 0 : null};
  right: ${props => props.right ? 0 : null};
  cursor: pointer;
`

export default ArticleChevron;