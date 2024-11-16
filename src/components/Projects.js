import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png"; 
import designImg from "../assets/img/design-img1.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const experienceProjects = [
    {
      title: "Project Based Internship as Graphic Designer",
      description: "GOVOKASI INDONESIA",
      imgUrl: projImg1,
    },
    {
      title: "Illustrator",
      description: "PT Digital investa",
      imgUrl: projImg2,
    },
    {
      title: "Graphic Designer",
      description: "Eduwork",
      imgUrl: projImg3,
    },
  ];

  const projectProjects = [
    {
      title: <a href="https://medium.com/@cpslaboratory2324/probox-tempat-penyimpanan-dengan-keamanan-cerdas-menggunakan-teknologi-rfid-f4bdd1535813" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', transition: 'all 0.3s ease' }} onMouseOver={(e) => {e.currentTarget.style.textDecoration = 'underline'; e.currentTarget.style.transform = 'scale(1.1)'; }} onMouseOut={(e) => { e.currentTarget.style.color = 'white'; e.currentTarget.style.textDecoration = 'none'; e.currentTarget.style.transform = 'scale(1)'; }}>Probox</a>,
      description: "Project IoT Protection Box",
      imgUrl: projImg4, 
    },
  ];
  
  const behanceLink = "https://www.behance.net/hazmanwirayudha1";

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div style={{ marginBottom: '50px' }}>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Experience</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Project</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Design</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {experienceProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projectProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row className="justify-content-center">
                          <Col md={6}>
                            <img
                              src={designImg}
                              alt="Design"
                              className="img-fluid rounded-image"
                              style={{ cursor: 'pointer' }}
                              onClick={() => window.open(behanceLink, "_blank")}
                            />
                          </Col>
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background"/>
    </section>
  );
}
