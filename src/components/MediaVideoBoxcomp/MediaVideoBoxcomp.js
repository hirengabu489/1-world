import React from 'react'
import { images } from '../../config/images'
import './MediaVideoBoxcomp.scss'

function MediaVideoBoxcomp(props) {
  return ( 
    <div className="MediaVideoBoxcompStyle">
      <div className="MediaVideoBox__Block">
        <div className="VideoBlock">
          <video loop muted autoPlay>
            <source src={images.mainvideo} alt="mainvideo"/>
          </video>
        </div>
        <div className="MediaVideoBox__Contant">
          <div className="MediaVideoBox__Title">Loremipsumis simply dummy</div>
          <div className="MediaVideoBOx__Des">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </div>
        </div>
      </div>
    </div>
  )
}

export default MediaVideoBoxcomp

