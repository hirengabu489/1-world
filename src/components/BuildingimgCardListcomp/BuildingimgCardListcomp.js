import React from 'react';
import './BuildingimgCardListcomp.scss'
import { images } from '../../config/images'
import BuildingimgCardcomp from '../BuildingimgCardcomp/BuildingimgCardcomp'

function BuildingimgCardListcomp(props) {
  return (
    <div className="BuildingimgCardListcompStyle">
      <div className="BuildingimgCard__List">
        <div className="Building__Itemcol">
            <BuildingimgCardcomp
              BuildingImg={<img src={images.BuildingImg1} alt="BuildingImg1"/>}
              BuildingName="office"
              BuildingDes="Lorem ipsum is simply dummy text of the printing and typesetting industry"
             />
            <BuildingimgCardcomp 
              BuildingImg={<img src={images.BuildingImg2} alt="BuildingImg2"/>}
              BuildingName="Life Science"
              BuildingDes="Lorem ipsum is simply dummy text of the printing and typesetting industry"
            />
            <BuildingimgCardcomp 
              BuildingImg={<img src={images.BuildingImg3} alt="BuildingImg3"/>}
              BuildingName="Amenities"
              BuildingDes="Lorem ipsum is simply dummy text of the printing and typesetting industry"
            />
            <BuildingimgCardcomp 
              BuildingImg={<img src={images.BuildingImg4} alt="BuildingImg4"/>}
              BuildingName="Sustainability"
              BuildingDes="Lorem ipsum is simply dummy text of the printing and typesetting industry"
            />
            <BuildingimgCardcomp 
              BuildingImg={<img src={images.BuildingImg5} alt="BuildingImg5"/>}
              BuildingName="Health & Wellness"
              BuildingDes="Lorem ipsum is simply dummy text of the printing and typesetting industry"
            />
            <BuildingimgCardcomp 
              BuildingImg={<img src={images.BuildingImg6} alt="BuildingImg6"/>}
              BuildingName="Connectivity"
              BuildingDes="Lorem ipsum is simply dummy text of the printing and typesetting industry"
            />
        </div>
      </div>
    </div>
  )
}

export default BuildingimgCardListcomp
