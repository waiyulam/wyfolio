import React from "react";
import { Fade } from "react-awesome-reveal";
import "./Error.css";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Particle from "../Particle";

function Error() {
  return(
      <Container fluid className = "error-main" >
        <Particle />
        <Container className="error-class">
          <Fade bottom duration={2000} distance="40px">
            <h1>Woops</h1>
            <p>The requested page is unavailable at the moment!</p>
            <Link
              className="main-button"
              to="/home"
              style={{
                color: "purple",
                backgroundColor: "white",
                border: `solid 1px ${"white"}`,
                display: "inline-flex",
              }}
            >
              Go Home
            </Link>
          </Fade>
        </Container>
      </Container>
  );
}

export default Error
