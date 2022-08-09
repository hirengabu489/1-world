import React from 'react'
import './LocationimgBoxcomp.scss'

function LocationimgBoxcomp(props) {
  return ( 
    <div className="LocationimgBoxcompStyle">
      {props.LocationData.map((loc)=>{
        return (
          <div className="LocationimgBox">
            <div className="LocationBoxBanner">
              <img src={loc.Locationimgbox} alt={loc.alt} />
            </div>
            <div className="LocationBoxImg__Overlay">
              <div className="main__container">
                <div className="LocationBox_Element">
                  <div className="LocationBox">
                    <div className="LocationBox_Title">
                        {loc.Locationimgbox_title}
                    </div>
                    <div className="LocationBox_Text">
                        {loc.Locationimgbox_text}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  );
}
  export default LocationimgBoxcomp  