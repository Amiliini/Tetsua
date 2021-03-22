import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Component.css";

function Muut() {
  return (
    <div className="tausta">
      {" "}
      <div className="divi">
        <div>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-50"
                src={"./images/keittiö.jpg"}
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
                src={"./images/keittiö1.jpg"}
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
                src={"./images/keittiö2.jpg"}
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
                src={"./images/keittiö3.jpg"}
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
                src={"./images/keittiö4.jpg"}
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
                src={"./images/keittiö5.jpg"}
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
                src={"./images/keittiö6.jpg"}
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
                src={"./images/keittiö7.jpg"}
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
          <h3>Muut</h3>
          <p>
            Aina rakentamisen tai remontoinnin ei tarvitse olla suuri
            kokonaisuus. Toteutan ammatitaidolla myös pienempiä töitä, kuten
            esimerkiksi pieniä lattiavaluja, terasseja, keittiön ehostuksia tai
            vaikka kylpyhuoneen silikonien vaihtoja.
          </p>
        </div>{" "}
      </div>
    </div>
  );
}

export default Muut;
