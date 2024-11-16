import { SiAdobephotoshop, SiAdobeillustrator, SiAdobepremierepro } from 'react-icons/si';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p></p>
                        <div className="skills-container">
                            <div className="item">
                                <SiAdobephotoshop size={50} style={{ marginBottom: '25px', color: '#31A8FF' }} />
                                <h5 style={{ color: '#31A8FF' }}>Adobe Photoshop</h5>
                            </div>
                            <div className="item">
                                <SiAdobeillustrator size={50} style={{ marginBottom: '25px', color: '#FF9A00' }} />
                                <h5 style={{ color: '#FF9A00' }}>Adobe Illustrator</h5>
                            </div>
                            <div className="item">
                                <SiAdobepremierepro size={50} style={{ marginBottom: '25px', color: '#9999FF' }} />
                                <h5 style={{ color: '#9999FF' }}>Adobe Premiere Pro</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
