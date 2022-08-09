import React from "react";
import "./MediaImgCardcomp.scss";
import { Row, Col } from "antd";

function MediaImgCardcomp(props) {
  return (
    <div className="MediaImgCardcompStyle">
      <Row gutter={[30, 30]}>
        {props.MediaImgData.map((mediaimg) => {
          return (
            <Col xs={12} md={12}>
              <div className="MediaImgCard__Block">
                <div className={`MediaImgCard__Img`}>
                  <img src={mediaimg.MediaImg} alt="mediaimg" />
                </div>
                <div className="MediaImgCard__Title">
                  {mediaimg.MediaImgTitle}
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default MediaImgCardcomp
