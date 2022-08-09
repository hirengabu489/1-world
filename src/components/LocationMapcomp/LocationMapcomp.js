import React from 'react';
import { images } from '../../config/images';
import './LocationMapcomp.scss'

function LocationMapcomp() {
  return ( 
    <div className="LocationMapcompStyle">
      <div className="LocationMapBox">
        <figure className="img__box">
          <img src={images.map} alt="map" />
        </figure>
        <div style={{height:'100vh', width: '100%'}}>
            {/* <GoogleMapReact
            bootstrapURLKeys={{ key: }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            />
          </GoogleMapReact> */}
        </div>
      </div>
    </div>
  )
}
export default LocationMapcomp