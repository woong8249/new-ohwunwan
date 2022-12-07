import styled from "styled-components";

// components
import Article from "./Article";

function Main() {
  return (
    <MainWrap>
      <Article />
      <Article />
    </MainWrap>
  )
}

const MainWrap = styled.div`
  font-size: 16px;
  width: 123rem;
  height: 200vh; // 컨텐츠 들어가기전 임시
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
`

export default Main;