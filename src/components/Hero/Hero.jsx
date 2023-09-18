import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../Hero/Hero.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Hero() {
  return (
    <div className=''>
      <Carousel >
        <Carousel.Item interval={100}>
          <img
            className="d-block w-75 mt-4 container-fluid"
            src="/src/assets/1.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-75 mt-4 container-fluid"
            src="/src/assets/2.png"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-75 mt-4 container-fluid"
            src="/src/assets/3.png"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}> 
          <img
            className="d-block w-75 mt-4 container-fluid"
            src="/src/assets/4.png"
            alt="Fourth slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Hero;
