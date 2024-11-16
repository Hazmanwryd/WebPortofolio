import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const About = () => {
  return (
    <section className="about" id="about">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div style={{ marginBottom: '50px' }}>
                <h2>About Me</h2>
                <p>I am a Graphic Designer with extensive experience handling diverse design projects for numerous companies and organizations. From creating compelling posters to dynamic videos, I bring a strategic and creative approach to every project, focused on delivering visuals that capture attention and communicate a clear message effectively</p>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
