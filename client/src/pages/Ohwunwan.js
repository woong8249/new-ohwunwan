import { Fragment } from "react"

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
          <h2>main</h2>
        </div>

        <div className="sidebar">
          <h3>sidebar</h3>
        </div>

      </div>
    </Fragment>
  )
}

export default Ohwunwan