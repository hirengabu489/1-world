import React, { Component } from "react";
import { images } from "../../config/images";
import Menuicon from "../../components/Iconcomp/Menuicon/Menuicon";
import DarkMode from "../../components/Iconcomp/DarkMode/DarkMode";
import Close from "../../components/Iconcomp/Close/Close";
import { Menu, Button, Row, Col } from "antd";
import "./Headercomp.scss";
import { Link } from "react-router-dom";

class Headercomp extends Component {
  listener = null;
  state = {
    showMenubar: false,
    theme: "light",
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed: !this.state.collapsed });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.pageYOffset > 200) {
      if (!this.state.nav) {
        this.setState({ nav: true });
      }
    } else {
      if (this.state.nav) {
        this.setState({ nav: false });
      }
    }
  };

  render() {
    const { showMenubar, isVisible } = this.props;
    return (
      <div className={`HeadercompStyle ${this.state.nav && "HeaderSticky"}`}>
        <div className="main__container">
          <Row align="middle">
            <Col xs={4}>
              <Link to="/" className="logo">
                <img src={images.Barandlogo} alt="logo" />
              </Link>
            </Col>
            <Col xs={20}>
              <div className="Header_Rightmenu_Bar">
                <div className="Mobilemenu_icon">
                  <Button
                    onClick={() => {
                      showMenubar();
                    }}
                    icon={<Menuicon />}
                  ></Button>
                </div>
                <div className={isVisible ? "menu_block open" : "menu_block"}>
                  <div className="menuclose_icon">
                    <Button
                      onClick={() => {
                        showMenubar();
                      }}
                      icon={<Close />}
                    ></Button>
                  </div>
                  {/* <Menu>
                    <Menu.Item
                      key="building"
                      onClick={() =>
                        this.props.buildingclick("buildingdeatils")
                      }
                    >
                      Building
                    </Menu.Item>
                    <Menu.Item
                      key="location"
                      onClick={() => this.props.locationclick("location")}
                    >
                      Location
                    </Menu.Item>
                    <Menu.Item
                      key="team"
                      onClick={() => this.props.teamclick("team")}
                    >
                      Team
                    </Menu.Item>
                    <Menu.Item
                      key="news"
                      onClick={() => this.props.newsclick("media")}
                    >
                      Media
                    </Menu.Item>
                    <Menu.Item
                      key="contactus"
                      onClick={() => this.props.contactusclick("contactus")}
                    >
                      Contact Us
                    </Menu.Item>
                  </Menu> */}
                  <Button type="primary">View Construction</Button>
                </div>
                <div className="theme_btns">
                  <Button
                  >
                    <DarkMode />
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Headercomp;
