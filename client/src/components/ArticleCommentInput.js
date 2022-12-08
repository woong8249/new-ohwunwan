import styled from "styled-components";

function ArticleCommentInput({...props}) {
  const commentValue = 2;
  return (
    <CommentInput {...props} placeholder="댓글 달기..." required></CommentInput>
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