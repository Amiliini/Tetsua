import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Component.css";

function Muut() {
  return (
    <div className="tausta">
      <div className="divi">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-50"
              src={"./images/mmuut1.jpg"}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-50"
              src={"./images/mmuut2.jpg"}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-50"
              src={"./images/mmuut3.jpg"}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-50"
              src={"./images/mmuut4.jpg"}
              alt="Fourth slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-50"
              src={"./images/mmuut5.jpg"}
              alt="Fifth slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-50"
              src={"./images/mmuut6.jpg"}
              alt="Sixth slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-50"
              src={"./images/mmuut7.jpg"}
              alt="Seventh slide"
            />
          </Carousel.Item>
        </Carousel>

        <div className="teksti">
          <h3>Muut</h3>
          <p>
            Aina rakentamisen tai remontoinnin ei tarvitse olla suuri
            kokonaisuus. Toteutan ammatitaidolla myös pienempiä töitä, kuten
            esimerkiksi pieniä lattiavaluja, terasseja, keittiön ehostuksia tai
            vaikka kylpyhuoneen silikonien vaihtoja.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Muut;
