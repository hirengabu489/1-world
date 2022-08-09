import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MainBannercomp  from '../../components/MainBannercomp/MainBannercomp'
import BuildingimgCardListcomp  from '../../components/BuildingimgCardcomp/BuildingimgCardcomp'
import LocationCardcomp  from '../../components/LocationCardcomp/LocationCardcomp'
import LocationMapcomp  from '../../components/LocationMapcomp/LocationMapcomp'
import MediaVideoBoxcomp from '../../components/MediaVideoBoxcomp/MediaVideoBoxcomp'
import MediaimgCardListcomp from '../../components/MediaimgCardListcomp/MediaimgCardListcomp'
import TeamcardListSlidercomp from '../../components/TeamcardListSlidercomp/TeamcardListSlidercomp'
import ContactCardcomp from '../../components/ContactCardcomp/ContactCardcomp'
import ArrowNext from '../../components/Iconcomp/ArrowNext/ArrowNext'
// import './Homepage.scss'

class Homepage extends Component {
  render() { 
    return ( 
      <div className="HomepageStyle">
        <MainBannercomp />
        <div id="buildingdetails">
          <BuildingimgCardListcomp/>
        </div>
        <div id="Loacation" className="Location__Section">
          <div className="Location__Boxcol">
            <LocationCardcomp/>
          </div>
          <div className="Location__map__block">
            <LocationMapcomp/>
          </div>
        </div>
        <div id="Team" className="Team__Section">
            <div className="Section__Title">Team</div>
            <TeamcardListSlidercomp/>
        </div>      
        <div id="media" className="Media__Section">
          <div className="main__container">
            <div className="Section__Title">Media</div>
            <div className="Media__Contant__block">
              <div className="LeftBox__Col">
                <MediaVideoBoxcomp/>
              </div>
              <div className="RightBox__Col">
                <MediaimgCardListcomp/>
                <div className="ViewMore__Link">
                  <Link to="media">
                    <span>View More</span>
                    <ArrowNext/>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="contactus" className="ContactUs__Section">
          <div className="main__container">
            <ContactCardcomp/>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage