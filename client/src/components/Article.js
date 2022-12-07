import styled from "styled-components";

// dummy
import userImage from "../assets/icons/circle-user-solid.svg";

function Article() {
  return (
    <ArticleWrap>
    </ArticleWrap>
  )
}

const ArticleWrap = styled.div`
  width: ${props => props.theme.postWidth};
  height: ${props => props.theme.postWidth}; // 임시용
  border: 1px solid ${props => props.theme.elevatedSeparator};
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  background-color: aliceblue;
`

export default Article;