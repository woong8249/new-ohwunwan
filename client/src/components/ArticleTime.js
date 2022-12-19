import styled from "styled-components";

function ArticleTime({...props}) {
  return (
    <Time {...props}>{props.updatedAt.slice(0, 10)}</Time>
  )
}

const Time = styled.span`
`

export default ArticleTime;