import styled from "styled-components";

function ArticleCommentButton({...props}) {
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