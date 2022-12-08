import styled from "styled-components";

// icons
import like from "../assets/icons/like.png";
import liked from "../assets/icons/liked.png";

function ArticleLikeButton({...props}) {
  return (
    <LikeButton {...props} src={props.liked ? liked : like} ></LikeButton>
  )
}

const LikeButton = styled.img`
  width: 2rem;
`

export default ArticleLikeButton;