import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import DegreeCardBac from "./DegreeCardBac";
import DegreeCardMas from "./DegreeCardMas";
import cornellLogo from "../../Assets/cornell-logo.png";
import davisLogo from "../../Assets/davis-logo.png";
import { Fade } from "react-awesome-reveal";

function Degree() {
    return (
        <Container fluid>
            <h1 className="about-heading">
                Degree I <strong className="purple">Received</strong>
            </h1>
            <p className="about-body"> I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️
            </p>
            <Row className="degree-body">
                <Col md={2} className="degree-img">
                    <Fade>
                        <a href="https://www.cs.cornell.edu/masters" target="_blank" rel="noopener noreferrer">
                            <img style={{
                                maxWidth: "100%",
                                maxHeight: "100%",
                                transform: "scale(0.9)",
                            }} src={cornellLogo} />
                        </a>
                    </Fade>
                </Col>
                <Col md={10} style={{ justifyContent: "center", paddingTop: "30px", paddingBottom: "50px", }} >
                    <Fade>
                        <DegreeCardMas />
                    </Fade>

                </Col>
                <Col md={2} className="degree-img">
                    <Fade>
                        <a href="https://cs.ucdavis.edu/about" target="_blank" rel="noopener noreferrer">
                            <img style={{
                                maxWidth: "100%",
                                maxHeight: "100%",
                                transform: "scale(0.9)",
                            }} src={davisLogo} />
                        </a>

                    </Fade>

                </Col>
                <Col md={10} style={{ justifyContent: "center", paddingTop: "30px", paddingBottom: "50px", }} >
                    <Fade>
                        <DegreeCardBac />
                    </Fade>

                </Col>

            </Row>
        </Container>


    );
}

export default Degree 