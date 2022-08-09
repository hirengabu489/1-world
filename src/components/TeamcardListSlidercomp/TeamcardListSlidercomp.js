import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { images } from '../../config/images'
import Teamcardcomp from '../Teamcardcomp/Teamcardcomp'
import './TeamcardListSlidercomp.scss'
import { Link } from 'react-router-dom'
import ArrowNext from '../../components/Iconcomp/ArrowNext/ArrowNext'

function TeamcardListSlidercomp() {
  const settings = {
    speed: 2000,
    arrows: true,
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }
  return (
    <div className="TeamcardListSlidercompStyle">
      <div className="Teamcard__Lists">
        <Slider {...settings}>
          <div className="slideitem">
            <Teamcardcomp 
              TeamImg={<img src={images.TeamImg1} alt="TeamImg1"/>}
              TeamName="Inceman Interieur"
              TeamDesgnation="Interior Design"
              TeamDesText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
            />
          </div>
          <div className="slideitem">
            <Teamcardcomp 
              TeamImg={<img src={images.BuildingImg1} alt="TeamImg2"/>}
              TeamName="Railroad"
              TeamDesgnation="Project Managment"
              TeamDesText="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
            />
          </div>
          <div className="slideitem">
            <Teamcardcomp 
              TeamImg={<img src={images.BuildingImg2} alt="TeamImg3"/>}
              TeamName="All Plumbing Inc"
              TeamDesgnation="Plumbing"
              TeamDesText="Lorem Ipsum is simply"
            />
          </div>
          <div className="slideitem">
            <Teamcardcomp 
              TeamImg={<img src={images.TeamImg1} alt="TeamImg4"/>}
              TeamName="Crbo Design"
              TeamDesgnation="Interior Design"
              TeamDesText="printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting."
            />
          </div>
          <div className="slideitem">
            <Teamcardcomp 
              TeamImg={<img src={images.TeamImg1} alt="TeamImg1"/>}
              TeamName="Inceman Interieur"
              TeamDesgnation="Interior Design"
              TeamDesText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
            />
          </div>
          <div className="slideitem">
            <Teamcardcomp 
              TeamImg={<img src={images.BuildingImg1} alt="TeamImg2"/>}
              TeamName="Railroad"
              TeamDesgnation="Project managment"
              TeamDesText="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
            />
          </div>
          <div className="slideitem">
            <Teamcardcomp 
              TeamImg={<img src={images.BuildingImg2} alt="TeamImg3"/>}
              TeamName="All Plumbing Inc"
              TeamDesgnation="Plumbing"
              TeamDesText="Lorem Ipsum is simply"
            />
          </div>
          <div className="slideitem">
            <Teamcardcomp 
              TeamImg={<img src={images.TeamImg1} alt="TeamImg4"/>}
              TeamName="Crbo Design"
              TeamDesgnation="Interior Design"
              TeamDesText="printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting."
            />
          </div>
        </Slider>
      </div>
      <div className="Viewmore__Link">
        <Link to="team">
          <span>View More</span>
          <ArrowNext/>
        </Link>
      </div>
    </div>
  )
}

export default TeamcardListSlidercomp
