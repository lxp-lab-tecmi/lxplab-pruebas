import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useHolderjs } from "use-holderjs";

export const IndexScreen = () => {
  useHolderjs();
  return (
    <div className="main">
      <div className="w-100 d-flex align-items-center flex-column">
        <h1 className="mt-3 mb-3">Bienvenido a la página de pruebas</h1>

        <Carousel style={{ maxWidth: "800px" }}>
          <Carousel.Item>
            <img className="d-block w-100" src="holder.js/800x400?text=Tecmilenio&bg=42bb46" alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Propósito de vida&bg=74bb64"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Psicología positiva&bg=5ebb90"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};
