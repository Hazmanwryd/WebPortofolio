import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/hazman-wirayudha/', '_blank');
  };

  const openBehance = () => {
    window.open('https://www.behance.net/gallery/212311233/Graphic-Design-Portofolio', '_blank');
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={8}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>Hi! I'm</h1><h1>Hazman Wirayudha</h1>
                <button onClick={openBehance} className="behance-button" style={{ marginBottom: '20px' }}>
  View My Behance Portfolio
</button>
<button onClick={openLinkedIn}>
  Let's Connect <ArrowRightCircle size={25} />
</button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={4}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
