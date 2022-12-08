import styled from "styled-components";

function ArticleCommentCount({...props}) {
  return (
    <CommentCount {...props}>
      {props.comment === "0" ? null : `댓글 ${props.comment}개 모두 보기`}
    </CommentCount>
  )
}

const CommentCount = styled.span`
  color: ${props => props.theme.secondaryText};
  cursor: pointer;
`

export default ArticleCommentCount;