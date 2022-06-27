import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCard from "./projectCard/ProjectCard";
import "./Project.css"

const projects = [
    {
        title: "ORCNN",
        description: "Occlusion-aware RCNN propose an all-in-one, end to end trainable multi-task model for semantic segmentation that simultaneously predicts amodal masks, visible masks, and occlusion masks for each object instance in an image in a single forward pass. On the COCO amodal dataset, ORCNN outperforms the current baseline for amodal segmentation by a large margin.",
        imgPath: "orcnn.png",
        link: "https://github.com/waiyulam/ORCNN",
        hasDemo: false
    },
    {
        title: "X-Map",
        description: "XMap is route finding, route planning, navigation and adventure sharing platform built with Python on Flask framework and React.js. Have features which allow users search for trails and parks around the world. Users will be able read other users reviews and create, edit or delete their own reviews.",
        imgPath: "xmap.png",
        link: "https://github.com/X-Map",
        hasDemo: true,
        demo: "https://xmapinc.netlify.app/"
    }
];

function Project() {
    return (
        <section>
            <Container fluid className="project-main" id="project">
                <Particle />
            </Container>
            <Container className="project-content">
                <h1> My <span className="purple">Recent</span> Works </h1>
                <p>I passionately combine good design, technology, and innovation in all my projects, which I like to accompany from the first idea to release. Here are a few projects I've worked on recently.</p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    {
                        projects.map((project) => {
                            return (
                                <Col md={4} className="project-card">
                                    <ProjectCard 
                                        imgPath={project.imgPath}
                                        hasDemo={project.hasDemo}
                                        title={project.title}
                                        description={project.description}
                                        link={project.link}
                                        demo={project.demo}
                                    />
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>


        </section>

    );
}

export default Project; 