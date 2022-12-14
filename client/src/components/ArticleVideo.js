import styled from "styled-components";

function ArticleVideo({...props}) {
  return (
    <Video controls>
      <source src={props.content[0]} />
    </Video>
  )
}

const Video = styled.video`
  width: ${props => props.theme.postWidth};
`

export default ArticleVideo;