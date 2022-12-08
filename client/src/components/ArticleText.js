import styled from "styled-components";

function ArticleText({...props}) {
  return (
    <BBB {...props}>{props.text}</BBB>
  )
}

const BBB = styled.span`
`

export default ArticleText;