import React from "react"
import "./Teamcardcomp.scss"

function Teamcardcomp(props) {
  return (
    <div className="TeamcardcompStyles">
      <div className="Teamcardbox">
        <div className="Teamcardelement">
          <div className="Teamcard__user">
            <figure className={`Teamcardimg`}>{props.TeamImg}</figure>
            <div className="Teamcardname">
              <h4>{props.TeamName}</h4>
              <div className="Team__designation">{props.TeamDesignation}</div>
            </div>
          </div>
          <p>{props.TeamDestext}</p>
        </div>
      </div>
    </div>
  )
}

export default Teamcardcomp
