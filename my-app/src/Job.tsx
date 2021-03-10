import React from 'react';
import { Card } from 'react-bootstrap';
import "./Job.css";

function Job() {
  return (
     <div className="job-container job-right">
       <Card
          bg="dark"
          text="light"
          className="job-content"
        >
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Card Title </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk
              of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
    </div>
  );
}

export default Job;
