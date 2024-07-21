// src/ImageComponent.js
import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import rocket from './assets/rocket.jpg'
import AstroEvent from './assets/AstroEvent.jpg'

const ImageComponent = () => {
  const images = [
    { src: rocket, alt: 'Space Launch' },
    {src:AstroEvent, alt: 'Astronomy Event' }
    
  ];

  const [currentImage, setCurrentImage] = useState(images[0]);

  const showImage = (index) => {
    setCurrentImage(images[index]);
  };

  return (
    <Container className="text-center mt-5">
      <Row>
        <Col>
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            className="img-fluid"
            style={{ width: '100%', height: 'auto' }}
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <Button variant="primary" onClick={() => showImage(0)}>
            Space Launch
          </Button>
        </Col>
        <Col>
          <Button variant="secondary" onClick={() => showImage(1)}>
            Astronomy Events
          </Button>
        </Col>
        
      </Row>
    </Container>
  );
};

export default ImageComponent;