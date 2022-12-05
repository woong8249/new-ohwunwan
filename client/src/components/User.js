import { Fragment } from "react";
import userImage from "../assets/icons/circle-user-solid.svg";

function User() {
  return (
    <Fragment>
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
    </Fragment>
  )
}

export default User