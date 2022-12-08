import styled from "styled-components";

// components
import Article from "./Article";

// dummy
import userImage from "../assets/icons/circle-user-solid.svg";
import articleImage from "../assets/images/workout1.jpeg";

function Main() {
  const articleLists = {
    articles: [
      {
        userId: "sonny",
        userName: "손흥민",
        userImage: {userImage},
        articleImage: {articleImage},
        text: "오늘의 운동 완료!",
        comments: []
      },
      {
        userId: "hee",
        userName: "황희찬",
        userImage: {userImage},
        articleImage: {articleImage},
        text: "나도 오운완!",
        comments: []
      }
    ]
  }

  return (
    <MainWrap>
      {/* {articleLists.articles.map((obj, idx) => 
        <Fragment key={idx}>
          <Article />
        </Fragment>
      )} */}

      <Article {...articleLists} />
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

