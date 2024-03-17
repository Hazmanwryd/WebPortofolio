import { FaNetworkWired, FaPaintBrush, FaMicrochip } from 'react-icons/fa';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

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
                                <FaNetworkWired size={50} style={{ marginBottom: '25px', color: 'black' }} />
                                <h5 style={{ color: 'black' }}>Network Engineering</h5>
                            </div>
                            <div className="item">
                                <FaPaintBrush size={50} style={{ marginBottom: '25px', color: 'black' }} />
                                <h5 style={{ color: 'black' }}>Graphic Design</h5>
                            </div>
                            <div className="item">
                                <FaMicrochip size={50} style={{ marginBottom: '25px', color: 'black' }} />
                                <h5 style={{ color: 'black' }}>IoT Development</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
