import React from 'react';
import { Card, Col } from 'react-bootstrap';

const RveviewShow = ({review}) => {
    const {email, description, number } = review;
    return (
        <div>
            <Col>
          <Card>
            <Card.Body>
              <Card.Title>{email}</Card.Title>
              <b>Rating: {number} </b>
              <p>{description}</p>
              
             
            </Card.Body>
          </Card>
        </Col>
        </div>
    );
};

export default RveviewShow;