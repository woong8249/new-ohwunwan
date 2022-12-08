import styled from "styled-components";

function ArticleIndex({...props}) {
  return (
    <ArticlePoint {...props}></ArticlePoint>
  )
}

const ArticlePoint = styled.div`
  background-color: ${props => props.theme.primaryBackground};
  width: 7px;
  height: 7px;
  border-radius: 50%;
  /* transition: all 2s ease-in-out; */
  margin-right: 4px;
  opacity: ${props => props.now ? 1 : 0.4};
`

export default ArticleIndex;