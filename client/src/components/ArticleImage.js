import styled from "styled-components";

// components
import ArticleChevron from "./ArticleChevron";
import ArticleIndex from "./ArticleIndex";

function ArticleImage({...props}) {
  return (
    <ArticleImageWrap>
      
      {props.content.length === 1 ? 
        null :
        <ArticleChevron left />
      }

      {props.content.length === 1 ? 
        <ArticlePicture src={props.content[0]}></ArticlePicture> :
        <ArticlePicture src={props.content[0]}></ArticlePicture>
      }

      {props.content.length === 1 ? 
        null :
        <ArticleChevron right />
      }

      <ArticleIndexWrap>

        {/* 사진 index 동그라미 */}
        {props.content.length === 1 ?
          null :
          props.content.map((el, idx) => {
            return(
              <ArticleIndex key={idx} />
              // <ArticleIndex now />
            )
          })
        }

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