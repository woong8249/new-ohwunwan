import styled from "styled-components";
import { useSelector ,useDispatch } from "react-redux";

function ArticleCommentButton({...props}) {
  const comment = useSelector(state => state.comment);
  // console.log(props) // ohwunwan_id - 게시물 번호
  return (
    <CommentButton {...props}>입력</CommentButton>
  )
}

const CommentButton = styled.button`
  padding: 0.2rem;
  color: ${props => props.theme.secondaryText};
  color: ${props => props.theme.buttonColor};
  font-weight: ${props => props.theme.fontBold};
`

export default ArticleCommentButton;