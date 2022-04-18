
import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import doctor1 from '../../../image/doctor1.webp';
import doctor2 from '../../../image/doctor2.webp';
import doctor3 from '../../../image/doctor3.webp';

const Banar = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={doctor1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Take the First Step to Help</h3>
            <p>Your health is your most important asset. You should entrust it only to the best professionals.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={doctor2}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Take the First Step to Help</h3>
            <p>Your health is your most important asset. You should entrust it only to the best professionals.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={doctor3}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Take the First Step to Help</h3>
            <p>
            Your health is your most important asset. You should entrust it only to the best professionals.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Banar;











