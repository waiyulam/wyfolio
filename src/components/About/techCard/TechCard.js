import React from "react";
import { OverlayTrigger, Tooltip, Row, Col } from "react-bootstrap";

function TechCard({ data }) {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            {
                data.map((value) => {
                    let logo;
                    if (value.title === "Golang") {
                        logo = <img style={{
                            maxWidth: "30%",
                            maxHeight: "30%",
                        }} src={value.logo} alt="golang"/>
                    } else {
                        logo = <value.logo />
                    }
                    return (
                        <OverlayTrigger
                            key={value.title}
                            placement={"bottom"}
                            overlay={
                                <Tooltip id={`tooltip-top`}>
                                    <h3>{value.title}</h3>
                                </Tooltip>
                            }
                        >
                            <Col xs={4} md={2} className="tech-icons">
                                {logo}
                            </Col>
                        </OverlayTrigger>
                    )
                })
            }

        </Row>


    )
}

export default TechCard;