import styled from "styled-components";
import { useDispatch } from "react-redux"
import { ADD_COMMENT } from "../store/modules/comment";

function ArticleCommentInput({...props}) {
  const dispatch = useDispatch()
  
  return (
    <CommentInput {...props} placeholder="댓글 달기..." required onChange={(e) => {
      dispatch({type: ADD_COMMENT, comment: e.target.value})
      // console.log(comment)
    }}></CommentInput>
  )
}

const CommentInput = styled.textarea`
  &:focus {
    outline: none;
  }
  resize: none;
  width: ${props => props.theme.commentInputWidth};
  height: 2rem;
  border: none;
`

export default ArticleCommentInput;