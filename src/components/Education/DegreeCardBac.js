import React from "react";
import Card from 'react-bootstrap/Card';
import davisImg from '../../Assets/ucdavis.jpeg'
import ListGroup from 'react-bootstrap/ListGroup';
import {ImPointRight} from "react-icons/im"

function DegreeCardBac() {
    return (
        <Card className="degree-card-view">
        <Card.Body>
            <Card.Img variant="top" src={davisImg} alt="cornell" style={{ maxHeight: "12em" }} />
            <Card.ImgOverlay>
                <Card.Title className="degree-card-header">
                    <b>UC Davis College of Letters and Science</b>
                </Card.Title>
                <Card.Subtitle ><b>B.S in Computer Science</b></Card.Subtitle>
                <Card.Footer >
                    2016-2020
                </Card.Footer>
            </Card.ImgOverlay>
            <Card.Text>
                <ListGroup className="list-group-flush ">
                    <ListGroup.Item className="degree-card-list-item bg-transparent"><ImPointRight/> I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.</ListGroup.Item>
                    <ListGroup.Item className="degree-card-list-item bg-transparent"><ImPointRight/> Apart from this, I have done advanced courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.</ListGroup.Item>
                    <ListGroup.Item className="degree-card-list-item bg-transparent" ><ImPointRight/> I was selected for Dean's Honors Lists which is given to top 5% of students in college. I have received award from respected director for consistently best performance in academics.</ListGroup.Item>
                </ListGroup>
            </Card.Text>
        </Card.Body>
    </Card >
    );
  }
  
  export default DegreeCardBac;