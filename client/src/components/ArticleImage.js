import styled from "styled-components";

// components
import ArticleChevron from "./ArticleChevron";
import ArticleIndex from "./ArticleIndex";

// dummy
import ArticlePicture1 from "../assets/images/workout1.jpeg";

function ArticleImage({...props}) {
  return (
    <ArticleImageWrap>
      <ArticleChevron left />
      <ArticlePicture src={ArticlePicture1}></ArticlePicture>
      <ArticleChevron right />
      <ArticleIndexWrap>
        <ArticleIndex now />
        <ArticleIndex />
        <ArticleIndex />
        <ArticleIndex />
        <ArticleIndex />
      </ArticleIndexWrap>
    </ArticleImageWrap>
  )
}

const ArticleImageWrap = styled.div`
  width: ${props => props.theme.postWidth};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const ArticlePicture = styled.img`
  width: ${props => props.theme.postWidth};
`

const ArticleIndexWrap = styled.div`
  width: ${props => props.theme.postWidth};
  height: 15px;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
`

export default ArticleImage;