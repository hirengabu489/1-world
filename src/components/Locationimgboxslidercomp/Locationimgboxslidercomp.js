import React from 'react';
import './Locationimgboxslidercomp.scss'
import { images } from '../../config/images'
import LocationimgBoxcomp from '../LocationimgBoxcomp/LocationimgBoxcomp'
import Slider from 'react-slick'



const data = {
  LocationData: [
    {
      Locationimgbox: images.Locationimgbox1,
      alt:'Locationimgbox1',
      Locationimgbox_title: 'SQUARE PARK',
      Locationimgbox_text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown',
    },
  ],
}

function Locationimgboxslidercomp() {
  const settings = {
    arrows: true,
    sliderToShow: 1,
    sloderToScroll: 1,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 680,
        settings: {
          sliderToShow: 1,
        },
      },
    ],
  }
  return ( 
    <div className="LocationimgboxslidercompStyle">
      <div className="Section_Title">Neighborhood</div>
      <div className="Locationimgbox_Lists">
        <Slider {...settings}>
          <div className="slideitem">
            <LocationimgBoxcomp {...data}/>
          </div>
          <div className="slideitem">
            <LocationimgBoxcomp {...data}/>
          </div>
          <div className="slideitem">
            <LocationimgBoxcomp {...data}/>
          </div>
          <div className="slideitem">
            <LocationimgBoxcomp {...data}/>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default Locationimgboxslidercomp;