import React from 'react'
import ArrowNext from '../../components/Iconcomp/ArrowNext/ArrowNext'
import './BuildingimgCardcomp.scss'
import { Link } from 'react-router-dom'

function BuildingimgCardcomp(props) {
  return (
    <div className="BuildingimgCardcompStyle">
      <div className="BuildingimgCard_Block">
        <div className={`BuildingimgCard__Img`}>{props.BuildingImg}</div>
        <div className="BuildingImgCard__contant">
          <div className="Building__Name">{props.BuildingName}</div>
          <div className="Building__Details">
            <div className="des-text">{props.Building.Des}</div>
            <Link to='buildingdetails' className="viewmore__link">
              <span>View More</span>
              <ArrowNext/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuildingimgCardcomp