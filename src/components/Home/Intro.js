import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/myPolygon.png";
import IntroCard from "./IntroCard";
import Tilt from "react-parallax-tilt";
import { Fade, Zoom } from "react-awesome-reveal";

function Intro() {
  return (
    <Container className="home-sub-section" id="homeIntro">
        <Row>
          <Col md={8} className="home-sub-heading">
            <h1 >
              KNOW WHO <span className="purple"> I'M </span>
            </h1>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center"}}>
          <Col md={8} className="home-intro-card">
            <Fade direction="left" duration={2000} triggerOnce={true}>
              < IntroCard />
            </Fade>
          </Col>
          <Col md={4} className="myAvtar">
            <Zoom duration={2000} triggerOnce={true} >
              <Tilt>
                <img src={myImg} className="img-fluid" alt="avatar" style={{ maxHeight: "700px" }} />
              </Tilt>
            </Zoom>
          </Col>
        </Row>
    </Container>
  );
}
export default Intro;
