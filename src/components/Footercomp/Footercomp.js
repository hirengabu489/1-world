import { Col, Row } from 'antd';
import React  from 'react';
import { images } from '../../config/images';
import './Footercomp.scss';
import { Link } from 'react-router-dom';
import Facebook from '../Iconcomp/Facebook/Facebook';
import Twitter from '../Iconcomp/Twitter/Twitter';
import Instagram from '../Iconcomp/Instagram/Instagram';

function Footercomp() {
  return ( 
    <div className="FootercompStyle">
      <div className="Footercompelement">
        <div className="main__container">
          <Row gutter={[0,0]}>
            <Col xs={24} md={12}>
              <div className="FootercompLeft">
                <div className="Footerlogo">
                  <Link to="/" className="logo">
                    <img src={images.Barandlogo} alt="logo" />
                  </Link>
                </div>
                <div className="Footerdes">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </div>
                <div className="Footericoncontent">
                  <div className="Footericon">
                    <Facebook/>
                  </div>
                  <div className="Footericon">
                    <Twitter/>
                  </div>
                  <div className="Footericon">
                    <Instagram/>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div className="Footercompright">
                <ul className="Footernavleft">
                  <li>
                    <Link to="buildingdetails">
                        Building
                    </Link>
                  </li>
                  <li>
                    <Link to="/location">
                        Location
                    </Link>
                  </li>
                  <li>
                    <Link to="/media">
                        Media
                    </Link>
                  </li>
                </ul>
                <ul className="Footernavright">
                  <li>
                    <Link to="team">
                        Team
                    </Link>
                  </li>
                  <li>
                    <Link to="contactus">
                        Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="Footercompdown">Copyright &#169; 2021 10 World Trade.</div>
    </div> 
  )
}

export default Footercomp
