import styled from "styled-components";
import { useSelector } from "react-redux";

// components
import Article from "./Article";

// utils
import GetArticles from "../utils/getArticles";

function Main({...props}) {
  // state
  const articles  = useSelector(state => state.articles);
  // console.log(articles)

  // 서버에서 atricle 정보 받는 함수
  GetArticles("ohwunwan")

  return (
    <MainWrap>
      {articles.map((obj, idx) => {
        return (
          <Article key={idx} {...obj} />
        )
      })}
    </MainWrap>
  )
}

const MainWrap = styled.div`
  font-size: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
`

export default Main;

