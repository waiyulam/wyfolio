import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificationCard from "./certificationCard/CertificationCard";

const courses = [
    {
        title: "Machine Learning",
        subtitle: "Anil Damle and Kilian Weinberger",
        logo_path: "deep-learning.png",
        certificate_link:
            "https://www.cs.cornell.edu/courses/cs4780/2021fa/",
        alt_name: "Cornell University",
        color_code: "#8C151599",
    },
    {
        title: "Operating System",
        subtitle: "Rachit Agarwal",
        logo_path: "operating-system.png",
        certificate_link:
            "https://www.cs.cornell.edu/courses/cs4410/2021fa/admin.html",
        alt_name: "Cornell University",
        color_code: "#8C151599",
    },
    {
        title: "Database System",
        subtitle: "Immanuel Trummer",
        logo_path: "database.png",
        certificate_link:
            "https://www.cs.cornell.edu/courses/cs4320/2021fa/",
        alt_name: "Cornell University",
        color_code: "#8C151599",
    },
    {
        title: "Software Engineering",
        subtitle: "Curran Muhlberger",
        logo_path: "se.png",
        certificate_link:
            "https://www.cs.cornell.edu/courses/cs5150/2022sp/",
        alt_name: "Cornell University",
        color_code: "#8C151599",
    },
    {
        title: "Cloud Computing",
        subtitle: "Ken Birman",
        logo_path: "cloud-data.png",
        certificate_link:
            "https://www.cs.cornell.edu/courses/cs5412/2022sp/",
        alt_name: "Cornell University",
        color_code: "#8C151599",
    },
    {
        title: "Introduction to Computer Vision",
        subtitle: "Bharath Hariharan",
        logo_path: "cv.png",
        certificate_link:
            "https://drive.google.com/file/d/1lf708S4rYus8eCUpR_rZqLGLuX5ojzE6/view?usp=sharing",
        alt_name: "Cornell University",
        color_code: "#8C151599",
    },
    {
        title: "Foundations of Artificial Inllgnce",
        subtitle: "Haym Hirsh",
        logo_path: "ai.png",
        certificate_link:
            "https://courses.cis.cornell.edu/courses/cs4700/2022sp/",
        alt_name: "Cornell University",
        color_code: "#8C151599",
    },
    {
        title: "Computer Architecture",
        subtitle: "Norm Matloff",
        logo_path: "computer-architecture.png",
        certificate_link:
            "https://cs.ucdavis.edu/schedules-classes/ecs-154a-computer-architecture",
        alt_name: "UC Davis",
        color_code: "#8C151599",
    },
    {
        title: "Deep Learning for Computer Vision",
        subtitle: "Fei-Fei Li",
        logo_path: "neural-network.png",
        certificate_link:
            "http://cs231n.stanford.edu/",
        alt_name: "Stanford",
        color_code: "#8C151599",
    },
    {
        title: "Introduction to NLP",
        subtitle: "Yu Zhou",
        logo_path: "nlp.png",
        certificate_link:
            "https://drive.google.com/file/d/1oEjkG_EqmkxdUAtCpd-6s2yyHWLAISkw/view?usp=sharing",
        alt_name: "UC Davis",
        color_code: "#8C151599",
    },
]
function Courses() {
    return (
        <Container>
            <h1 className="edu-course-header">
                Relevant Courses I <span className="purple">Took</span>
            </h1>
            <Row style={{ justifyContent: "center", paddingTop: "1em", paddingBottom: "50px" }}>
                {courses.map((cert) => {
                    return (
                        <Col xs={4} md={4} className="courses">
                            <CertificationCard certificate={cert} />
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
}

export default Courses