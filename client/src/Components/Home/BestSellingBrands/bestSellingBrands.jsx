import React from "react";
import { Slideshow2, Slide } from "../BestSellingBrands/slideshow2";
import "./estilos2.module.css";
import styled from "styled-components";
import img1 from "../../Resources/marcasDes1.png";
import img2 from "../../Resources/marcasDes2.png";
import img3 from "../../Resources/marcasDes3.png";
import img4 from "../../Resources/marcasDes4.png";
import c from "./bestSellingBrands.css";

export default function BestSellingBrands() {
  return (
      <main className="container">
        <div className="tittle">
          <Titulo>MARCAS DESTACADAS</Titulo>
        </div>
        <Slideshow2
          controles={true}
          autoplay={true}
          velocidad="3000"
          intervalo="3000"
        >
          <Slide>
            <section>
              <img className={c.image} src={img1} alt="" />
            </section>
          </Slide>
          <Slide>
            <section>
              <img className={c.image} src={img2} alt="" />
            </section>
          </Slide>
          <Slide>
            <section>
              <img className={c.image} src={img3} alt="" />
            </section>
          </Slide>
          <Slide>
            <section>
              <img className={c.image} src={img4} alt="" />
            </section>
          </Slide>
        </Slideshow2>
      </main>
  );
}

const Titulo = styled.p`
  font-size: 30px;
  font-weight: 700;
  text-transform: uppercase;
`;
