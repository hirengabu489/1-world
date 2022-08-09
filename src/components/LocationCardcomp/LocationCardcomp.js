import React from 'react'
import ArrowNext from '../Iconcomp/ArrowNext/ArrowNext'
import './LocationCardcomp.scss'
import { Link } from "react-router-dom"



function LocationCardcomp() {
  return ( 
    <div className="LocationCardcompStyle">
      <div className="LocationCardBox">
        <div className="LocationCardElement">
          <h3>Located in the heart of boston</h3>
          <p>
            Walking distance to public transport lorem ipsum is simply dummy Walking distance
            to public transport lorem ipsum is simply dummy Walking distance to public transport
          </p>
          <Link to="location">
            <span>View More</span>
            <ArrowNext/>
          </Link>
        </div>
      </div>
    </div>  
  )
}

export default LocationCardcomp