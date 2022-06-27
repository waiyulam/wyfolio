import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
    AiFillGithub,
    AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

function Social() {
    return (
        <Container className="home-sub-section" id="homeSocial">
            <Row>
                <Col md={12} className="home-sub-heading">
                    <h1 style={{ fontSize: "2.6em" }}>FIND ME <span className="purple">ON </span></h1>
                    <p>
                        Feel free to <span className="purple">reach out and chat </span>with me
                    </p>
                </Col>
                <Col md={12} className="home-social-body">
                    <ul className="home-social-links">
                        < Fade duration={1000}>
                            <li className="social-icons">
                                <a
                                    href="https://github.com/waiyulam"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiFillGithub />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://twitter.com/waiyuu616"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiOutlineTwitter />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/waiyu-lam/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>
                        </Fade>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default Social 
