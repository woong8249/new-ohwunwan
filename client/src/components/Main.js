import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";

// components
import Article from "./Article";

// dummy
import userImage from "../assets/icons/circle-user-solid.svg";
import articleImage from "../assets/images/workout1.jpeg";

function Main() {
  const [articleLists, setArticleLists] = useState([])

  // const articleLists = {
  //   articles: [
  //     {
  //       userId: "sonny",
  //       userName: "손흥민",
  //       userImage: {userImage},
  //       articleImage: {articleImage},
  //       text: "오늘의 운동 완료!",
  //       comments: []
  //     },
  //     {
  //       userId: "hee",
  //       userName: "황희찬",
  //       userImage: {userImage},
  //       articleImage: {articleImage},
  //       text: "나도 오운완!",
  //       comments: []
  //     }
  //   ]
  // }

  function getArticleLists() {
    axios.get("http://localhost:8080/post/ohwunwan")
    .then(response => {
      console.log(response);
      setArticleLists(response.data)
    })
    .catch(error => {
      console.log(error)
    })
  }

  useEffect(() => {
    if(articleLists.length === 0) {
      getArticleLists()
    }
  },[articleLists])

  return (
    <MainWrap>
      {/* <Article {...articleLists} /> */}
      {articleLists.map((obj, idx) => {
        return (
          <p key={idx}>{obj.userId}</p>
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

