import React from "react";
import Card from "react-bootstrap/Card";
import { ImBlog } from "react-icons/im";
import { GiWeightLiftingUp,GiCook,GiGamepad,GiPaperPlane } from "react-icons/gi";
import { Fade } from "react-awesome-reveal";

function IntroCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        Hi Everyone, I am <span className="purple">Waiyu </span>
                        from <span className="purple"> China</span>. I recently graduated from <span className="purple">Cornell University</span> with my MEng pursuing <span className="purple">Computing and Information Science</span>.
                    </p>
                    <p style={{ textAlign: "justify" }}>
                        I'm a <span className="purple">Software Developer</span> with experience in designing new features from ideation to production. Currently, I am focused on scalable distributed architecture with real-time data stream in particular. Engineering full-stack applications with <span className="purple">MVC frameworks</span> and developing high-performance service with <span className="purple">REST APIs</span> are my strong suit. Whenever possible, I also apply my passion for developing user-friendly products with Modern Javascript Library
                        and Frameworks like <span className="purple">React.js and Node.js</span>.
                        I'm also interested in AI/ML related areas including <span className="purple"> Deep Learning and Computer Vision</span>, and I would love to leverage machine learning models into real world product. I always thrive to work on end to end products which develop <span className="purple">sustainable and scalable</span> social and technical systems to create impact.
                    </p>
                    <p style={{ textAlign: "justify" }}>
                        Apart from coding, some other activities that I love to do!
                        <ul className="intro-activity">
                            <li >
                                <GiWeightLiftingUp /> Body Building
                            </li>
                            <li >
                                <GiCook /> Cooking
                            </li>
                            <li >
                                <GiGamepad /> Playing Games
                            </li>
                            <li >
                                <ImBlog /> Writting Tech Blogs
                            </li>
                            <li >
                                <GiPaperPlane /> Travelling
                            </li>
                        </ul>
                    </p>

                    <p style={{ textAlign: "justify" }}>
                        I'm passionate about using my skills and experiences to bring value to others, whether it's in computer science, mentorship, or life.
                    </p>

                    <Fade>
                        <p style={{ color: "rgb(155 126 172)" }}>
                            "Strive to build things that make a difference!"{" "}
                        </p>
                        <footer className="blockquote-footer">Waiyu</footer>
                    </Fade>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default IntroCard;
