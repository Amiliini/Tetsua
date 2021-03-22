import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Component.css";

function Kylpyhuone() {
  return (
    <div className="tausta">
      {" "}
      <div className="divi">
        <div>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-50"
                src={"./images/pesu1.jpg"}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-50"
                src={"./images/pesu2.jpg"}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-50"
                src={"./images/pesu3.jpg"}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-50"
                src={"./images/pesu4.jpg"}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Fourth slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-50"
                src={"./images/pesu5.jpg"}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Fourth slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>{" "}
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
        </div>{" "}
      </div>
    </div>
  );
}

export default Kylpyhuone;
