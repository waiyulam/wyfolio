import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import { Fade } from "react-awesome-reveal";


const jobs = [
    {
        title: "Full Stack Development",
        description: [
            "Developing backend system with REST APIs in classic web frameworks and data integration including SQL and NoSQL databases",
            "Building responsive website front end using Node.js and React.js",
            "Creating iOS mobile applications using Flutter and Dart",
        ],
        media: "fullstack.svg"
    },
    {
        title: "Cloud Infra-Architecture",
        description: [
            "Experience working on multiple cloud platforms including AWS and Azure",
            "Hosting and maintaining platforms on multiple containers along with integration of databases",
            "Deploying deep learning models on cloud to use on mobile devices",
            "Setting up streaming jobs from DB to Server or vice-versa on Azure and AWS",
        ],
        media: "cloud_infrastructure.svg"
    },
    {
        title: "AI & ML Engineering",
        description: [
            "Developing highly scalable production ready models for various deeplearning and statistical use cases",
            "Experience of working with Computer Vision and NLP projects",
        ],
        media: "data_science.svg"
    },
]

function Skills() {
    return (
        <Container className="home-sub-section" id="homeSkills">
            <Container>
                <Row>
                    <Col md={8} className="home-sub-heading">
                        <h1 style={{ fontSize: "2.6em" }}>
                            WHAT I <span className="purple">DO</span>
                        </h1>
                    </Col>
                </Row>

                {jobs.map((job) => {
                    return (
                        <Row>
                            <Col md={8} className="home-skills-card">
                                <Fade direction="left" triggerOnce={true} duration={2000}>
                                    <h2>
                                        {job.title}
                                    </h2>
                                    <p className="home-skills-body">
                                        <ul  >
                                            {job.description.map((data) => {
                                                return <li> {data} </li>
                                            })}
                                        </ul>
                                    </p>
                                </Fade>
                            </Col>
                            <Col md={4} className="home-skills-media">
                                <Fade direction="right" triggerOnce={true} duration={2000}>
                                    <Tilt >
                                        <img src={require(`../../Assets/${job.media}`)} className="img-fluid" alt="full-stack" />
                                    </Tilt>
                                </Fade>
                            </Col>
                        </Row>
                    );
                })}
            </Container>
        </Container>
    );
}

export default Skills 