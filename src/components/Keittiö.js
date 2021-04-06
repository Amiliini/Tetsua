import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Component.css";

function Keittiö() {
  return (
    <div className="tausta">
      <div className="divi">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-50"
              src={"./images/kttio1.jpg"}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-1000 "
              src={"./images/kttio2.jpg"}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-50"
              src={"./images/kttio3.jpg"}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-50"
              src={"./images/kttio4.jpg"}
              alt="Fourth slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-50"
              src={"./images/kttio5.jpg"}
              alt="Fifth slide"
            />
          </Carousel.Item>
        </Carousel>

        <div className="teksti">
          <h3>Keittiöt</h3>
          <p>
            Keittiö on iso osa arkea. Vanhaan keittiöön voidaan uusia kaikki
            kalusteet ja kodinkoneet, mutta myös pienellä päivityksellä saadaan
            uutta ilmettä ja käyttöikää pidennettyä.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Keittiö;
