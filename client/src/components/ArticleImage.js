import styled from "styled-components";
import { useState, useEffect } from "react";

// components
import ArticleChevron from "./ArticleChevron";
import ArticleIndex from "./ArticleIndex";

function ArticleImage({...props}) {
  const [pictureOn, setPictureOn] = useState(0)

  const selectLeft = () => setPictureOn(pictureOn - 1)
  const selectRight = () => setPictureOn(pictureOn + 1)

  return (
    <ArticleImageWrap>
      
      {/* 왼쪽 버튼 */}
      {props.content.length === 1 ? 
        null :
        // 처음 사진일 때는 왼쪽 버튼 x
        pictureOn === 0 ? 
        null : 
        <ArticleChevron left onClick={() => selectLeft()} />
      }

      {props.content.length === 1 ? 
        <ArticlePicture src={props.content[pictureOn]}></ArticlePicture> :
        <ArticlePicture src={props.content[pictureOn]}></ArticlePicture>
      }
      
      {/* 오른쪽 버튼 */}
      {props.content.length === 1 ? 
        null :
        //! TODO: 마지막 사진일 때는 오른쪽 버튼 x
        // 사진이 넘어가고 카운트 되서, 동작이 원할하게 안먹네?
        pictureOn === props.content.lenght - 1 ? 
        null : 
        <ArticleChevron right onClick={() => selectRight()} />
      }

      <ArticleIndexWrap>

        {/* 사진 index 동그라미 */}
        {props.content.length === 1 ?
          null :
          props.content.map((el, idx) => {
            // * 선택한 동그라미에 색상 넣기
            return(
              idx === pictureOn ?  <ArticleIndex key={idx} now /> : <ArticleIndex key={idx}  />
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