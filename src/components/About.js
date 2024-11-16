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
                <p>Final-year Telecommunication Engineering student with a focus on Network engineering, also proficient in Graphic Design. Passionate and dedicated network engineer with a hands-on approach to problem-solving. My journey began in 2018, evolving through practical experiences and academic pursuits. also experienced as a graphic designer from various organizations.</p>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
