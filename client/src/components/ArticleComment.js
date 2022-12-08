import styled from "styled-components";

function ArticleComment({...props}) {
  return (
    <Comment {...props}>{props.comment}</Comment>
  )
}

const Comment = styled.span`
`

export default ArticleComment;