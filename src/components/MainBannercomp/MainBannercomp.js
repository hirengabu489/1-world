import React, { Component } from 'react'
import { images } from '../../config/images'
import './MainBannercomp.scss'
import { Button } from 'antd'
import { Link } from 'react-router-dom'

class MainBannercomp extends Component {
  state = {}
  render() { 
    return (  
      <div className="MainBannercompStyle">
        <div className="MainBanner_VideoBlock">
          <video loop muted autoPlay>
            <source src={images.mainvideo} alt="mainvideo"/>
          </video>
        </div>
        <div className="MainBannerContant"> 
          <div className="MainBannerDetails">
            <div className="main__container">
              <div className="MainBanner_Heading">
                <span>Lorem</span> Biulding Overview
              </div>
            </div>
            <div className="MainBanner_availability_Box">
              <div className="pretext">
                Delivering 100 sq space 2021
              </div>
              <div className="Title">
                Availability
              </div>
              <Button type='default' size='large'>
                <Link to="Availability">Lease Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
 
export default MainBannercomp