import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png"; 
import designImg1 from "../assets/img/design-img1.jpg";
import designImg2 from "../assets/img/design-img2.jpg";
import designImg3 from "../assets/img/design-img3.png";
import designImg4 from "../assets/img/design-img4.jpg";
import designImg5 from "../assets/img/design-img5.jpg";
import designImg6 from "../assets/img/design-img6.jpg";
import designImg7 from "../assets/img/design-img7.jpg";
import designImg8 from "../assets/img/design-img8.jpg";
import designImg9 from "../assets/img/design-img9.jpg";
import designImg10 from "../assets/img/design-img10.jpg";
import designImg11 from "../assets/img/design-img11.jpg";
import designImg12 from "../assets/img/design-img12.jpg.png";
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
      title: "Research Assistant",
      description: "Cyber Physical System Laboratory",
      imgUrl: projImg2,
    },
    {
      title: "Tech Support Intern",
      description: "PT PLN (Persero)",
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
  
  const designProjects = [
    { title: "Vector",  imgUrl: designImg1},
    { title: "Vector",  imgUrl: designImg2},
    { title: "Vector",  imgUrl: designImg3},
    { title: "Vector",  imgUrl: designImg4},
    { title: "Vector",  imgUrl: designImg5},
    { title: "Vector",  imgUrl: designImg6},
    { title: "Vector",  imgUrl: designImg7},
    { title: "Vector",  imgUrl: designImg8},
    { title: "Vector",  imgUrl: designImg9},
    { title: "Vector",  imgUrl: designImg10},
    { title: "Poster",  imgUrl: designImg11},
    { title: "Manipulation",  imgUrl: designImg12},
  ];
  
  
  
  

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div style={{ marginBottom: '50px' }}>
                <h2>About Me</h2>
                <p>Third-year Telecommunication Engineering student with a focus on Network engineering, also proficient in Graphic Design. Passionate and dedicated network engineer with a hands-on approach to problem-solving. My journey began in 2018, evolving through practical experiences and academic pursuits. also experienced as a graphic designer from various organizations.</p>
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
                        {
                          experienceProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projectProjects.map((project, index) => {
                            return (
                              <ProjectCard
                              key={index}
                              {...project}
                              onClick={() => window.location.href="https://medium.com/@cpslaboratory2324/probox-tempat-penyimpanan-dengan-keamanan-cerdas-menggunakan-teknologi-rfid-f4bdd1535813"}
                            />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          designProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
