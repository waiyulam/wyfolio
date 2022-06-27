import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import cornellImg from "../../Assets/cornell.jpeg"
import {ImPointRight} from "react-icons/im"

function DegreeCardMas() {
    return (
        <Card className="degree-card-view">
            <Card.Body>
                <Card.Img variant="top" src={cornellImg} alt="cornell" style={{ maxHeight: "12em" }} />
                <Card.ImgOverlay>
                    <Card.Title className="degree-card-header">
                        <b>Cornell Bowers College of Computing and Information Science</b>
                    </Card.Title>
                    <Card.Subtitle ><b>Computer Science, Master's in Engineering(MEng)</b></Card.Subtitle>
                    <Card.Footer >
                        2021-2022
                    </Card.Footer>
                </Card.ImgOverlay>
                <Card.Text>
                    <ListGroup className="list-group-flush ">
                        <ListGroup.Item className="degree-card-list-item bg-transparent"><ImPointRight/> My field of Interest's are building new Web Technologies and Products and also in areas related to Deep Learning and Computer Vision. </ListGroup.Item>
                        <ListGroup.Item className="degree-card-list-item bg-transparent"><ImPointRight/> As a central part of this program, I carried out several projects for real stakeholders and delivered large-scale, reliable systems including buidling a prototype of distributed services as well as AI/ML models.  </ListGroup.Item>
                        <ListGroup.Item className="degree-card-list-item bg-transparent"><ImPointRight/> Beyond those hard skills, I have leadership experience on mainitaining team dynamics, project management, professionism, and the legal framework for software development. </ListGroup.Item>
                    </ListGroup>
                </Card.Text>
            </Card.Body>
        </Card >

    );
}

export default DegreeCardMas;