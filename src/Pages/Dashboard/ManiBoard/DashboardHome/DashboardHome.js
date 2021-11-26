import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Dashboard.css'


const DashboardHome = () => {
    return (
        <div>
             <h1>Welcome To Dashboard</h1>

             <section>
             <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100" height="70%"
      src="https://images.sunglasshut.com/resource/blob/344860/a640e52b757b6f3e2d36e3ec63615c39/footerholiday-data.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100" height="70%"
      src="https://images.sunglasshut.com/resource/blob/344860/a640e52b757b6f3e2d36e3ec63615c39/footerholiday-data.png"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100" height="70%"
      src="https://media.oliverpeoples.com/op_stories/06SunglassClip/OP_stories_SunglassClip_01_D.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
             </section>
            
        </div>
    );
};

export default DashboardHome;