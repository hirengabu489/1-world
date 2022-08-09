import React from 'react'
import './MediaimgCardListcomp.scss'
import { images } from '../../config/images'
import MediaImgCardcomp from '../MediaImgCardcomp/MediaImgCardcomp'


const data = {
  MediaImgData: [
    {
      MediaImg: images.BuildingImg2,
      alt: 'BuildingImg2',
      MediaTitle: 'text of the printing and typesetting industry',
    },
    {
      MediaImg: images.BuildingImg4,
      alt: 'BuildingImg4',
      MediaTitle: 'industry Lorem Ipsum is simply dummy',
    },
    {
      MediaImg: images.BuildingImg1,
      alt: 'BuildingImg1',
      MediaTitle: 'text of the printing and typesetting industry',
    },
    {
      MediaImg: images.BuildingImg3,
      alt: 'BuildingImg3',
      MediaTitle: 'text of the printing and typesetting industry',
    },
  ],
}

function MediaimgCardListcomp(props) {
  return ( 
    <div className="MediaimgCardListcompStyle">
      <div className="MediaImgCard__Lists">
        <MediaImgCardcomp {...data} />
      </div>
    </div>
  )
}

export default MediaimgCardListcomp