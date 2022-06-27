import React from "react";
import { Container, Button } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import TechGallery from "./TechGallery";
import Experience from "./ExperienceAccordion";

function About() {
  return (
    <section>
      <Container fluid className="about-section" id="About">
        <Particle />
      </Container>
      <Container  className="about-content" >
        <h1 className="about-heading">
          Works  <strong className="purple">Related</strong>
        </h1>
        <Experience />
        <h1 className="about-heading">
          Professional <strong className="purple">Skillset </strong> 
        </h1>
        <TechGallery />
        <Github />
      </Container>

    </section>
  );
}

export default About;
