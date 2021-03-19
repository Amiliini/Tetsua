import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

function Kylpyhuone() {
  return (
    <div className="tausta">
      {" "}
      <div className="divi">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.flickr.com/photos/75487768@N04/7510139430"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Second slide&bg=282c34"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Third slide&bg=20232a"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>{" "}
      <img src="pesu1.jpg" alt="kylppärikuva"></img>
      <Image src="holder.js/pesu1" fluid />
      <Image src="http://placekitten.com/200/200" rounded />
    </div>
  );
}

export default Kylpyhuone;
