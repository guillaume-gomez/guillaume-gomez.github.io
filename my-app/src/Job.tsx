import React from 'react';
import { Card } from 'react-bootstrap';
import "./Job.css";

interface JobInterface {
  begin: string;
  end: string;
  company: string;
  jobTitle: string;
  jobDescription: string;
}

function Job({begin, end, jobTitle, jobDescription, company} : JobInterface) {
  return (
     <div className="job-container job-right">
       <Card
          bg="dark"
          text="light"
          className="job-content"
        >
          <Card.Header>{company}</Card.Header>
          <Card.Body>
            <Card.Title>{jobTitle}</Card.Title>
            <Card.Text>
              {jobDescription}
            </Card.Text>
          </Card.Body>
           <Card.Footer className="text-muted">{begin} - {end}</Card.Footer>
        </Card>
    </div>
  );
}

export default Job;
