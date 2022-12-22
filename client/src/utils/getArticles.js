import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// redux
import { ADD_ARTICLES } from "../store/modules/articles";

// 서버에서 get 요청하는 함수
function GetArticles(path) {
  const dispatch = useDispatch();
  const articles  = useSelector(state => state.articles);

  function getAxios() {
    axios.get(`${process.env.REACT_APP_DB_HOST}/post/${path}`)
    .then(response => {
      // console.log(response);
      dispatch({type: ADD_ARTICLES, articles: response.data});
    })
    .catch(error => {
      console.log(error)
    })
  }

  // 무한 랜더링을 막기 위한 useEffect
  useEffect(() => {
    if(articles.length === 0) {
      getAxios()
    }
  },[articles])
}

export default GetArticles;