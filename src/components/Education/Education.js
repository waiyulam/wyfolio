import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import Degree from "./Degree"
import Courses from "./Courses"

function About() {
  return (
    <section>
      <Container fluid className="about-section">
        <Particle />
      </Container>
      <Container className="about-content">
        <Degree />
        <Courses />
      </Container>
    </section>
  );
}

export default About;
