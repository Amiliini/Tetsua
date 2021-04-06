import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Component.css";

function Kylpyhuone() {
  return (
    <div className="tausta">
      <div className="divi">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-50"
              src={"./images/klppri1.jpg"}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-50"
              src={"./images/klppri2.jpg"}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-50"
              src={"./images/klppri3.jpg"}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-50"
              src={"./images/klppri4.jpg"}
              alt="Fourth slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-50"
              src={"./images/klppri5.jpg"}
              alt="Fifth slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-50"
              src={"./images/klppri6.jpg"}
              alt="Sixth slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-50"
              src={"./images/klppri7.jpg"}
              alt="Seventh slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-50"
              src={"./images/klppri8.jpg"}
              alt="Eight slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-50"
              src={"./images/klppri9.jpg"}
              alt="Ninth slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-50"
              src={"./images/klppri10.jpg"}
              alt="Tenth slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-50"
              src={"./images/klppri11.jpg"}
              alt="Eleventh slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-50"
              src={"./images/klppri12.jpg"}
              alt="Twelfth slide"
            />
          </Carousel.Item>
        </Carousel>

        <div className="teksti">
          <h3>Pesuhuoneet ja saunat</h3>
          <p>
            Teen ammattitaidolla asiakkaan toiveiden mukaisia ja laadukkaita
            kylpyhuonekokonaisuuksia. Hyvään lopputulokseen päästään aina
            huolellisen etukäteissuunnitelun kautta, joka voidaan toteuttaa myös
            yhteistyöyrityksen kautta 3D-mallinnuksena. Aikaisempi työskentely
            sisustustimpurina takaa laadukkaan viimeistelyn ja näyttävän
            lopputuloksen.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Kylpyhuone;
