import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";

// components
import Article from "./Article";

function Main() {
  // 서버에서 받은 article 정보
  const [articleLists, setArticleLists] = useState([])

  // 서버에서 atricle 정보 받는 함수
  function getArticleLists() {
    axios.get(`${process.env.REACT_APP_DB_HOST}/post/ohwunwan`)
    .then(response => {
      // console.log(response);
      setArticleLists(response.data)
    })
    .catch(error => {
      console.log(error)
    })
  }

  // 무한 랜더링을 막기 위한 useEffect
  useEffect(() => {
    if(articleLists.length === 0) {
      getArticleLists()
    }
  },[articleLists])

  return (
    <MainWrap>
      {articleLists.map((obj, idx) => {
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

