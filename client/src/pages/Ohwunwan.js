import { Fragment } from "react";

// dummy
import userImage from "../assets/icons/circle-user-solid.svg";
import mainImage1 from "../assets/images/workout1.jpeg";
import mainImage2 from "../assets/images/workout2.webp";

// components
import User from "../components/User";

function Ohwunwan() {
  return (
    <Fragment>
      <div className="wrap">

        <div className="menu">
          <h1>Logo</h1>

          <div className="menu__column">
            <div className="menu__column--left">
              <i className="fa-solid fa-dumbbell fa-xl"></i>
            </div>
            <span>오운완</span>
          </div>
          <div className="menu__column">
            <div className="menu__column--left">
              <i className="fa-solid fa-ranking-star fa-xl"></i>
            </div>
            <span>1RM</span>
          </div>
          <div className="menu__column">
            <div className="menu__column--left">
              <i className="fa-solid fa-comments fa-xl"></i>
            </div>
            <span>피드백</span>
          </div>
          <div className="menu__column">
            <div className="menu__column--left">
              <i className="fa-solid fa-square-plus fa-xl"></i>
            </div>
            <span>만들기</span>
          </div>
          <div className="menu__column">
            <div className="menu__column--left">
              <i className="fa-solid fa-user fa-xl"></i>
            </div>
            <span>프로필</span>
          </div>
        </div>

        {/* Todo: 해당 메뉴에 접근한 경우에는 아이콘의 색상 변경: 흰색 -> 검정색 */}

        <div className="main">
          
          <div className="main__post">
            <div className="main__post--header">
              <User />
            </div>
            <div className="main__post--contents">
              <img src={mainImage1} alt="contents" />
            </div>
            <div className="main__post--buttons">
              <i className="fa-regular fa-heart fa-xl"></i>
              {/* <i class="fa-solid fa-heart fa-xl"></i> */}
              <span>2022-12-02</span>
            </div>
            <div className="main__post--text">
              <p className="main__post--text-like">좋아요 00개</p>
              <p>12월 첫 운동 오운완!</p>
              <p className="main__post--text-comments">댓글 00개 모두 보기</p>
            </div>
            <div className="main__post--comments">
            </div>
            <div className="main__post--comments-bar">
              <form>
                <fieldset>
                  <input type="text" />
                  <button type="submit">게시</button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>

        <div className="sidebar">
          <h2>접속중인 유저</h2>
          
          <User />
          
          <div className="sidebar__user">
            <div className="sidebar__user--column">
              <div className="sidebar__user--column-left">
                <img src={userImage} alt="user" />
                <span className="sidebar__user--column-state"> </span>
              </div>
              <div className="sidebar__user--column-right">
                <span>손흥민</span>
              </div>
            </div>
          </div>
          
          <div className="sidebar__footer">
            <p>© 2022 Ohwunwan FROM TEAM GI-GO</p>
          </div>
        </div>

      </div>
    </Fragment>
  )
}

export default Ohwunwan