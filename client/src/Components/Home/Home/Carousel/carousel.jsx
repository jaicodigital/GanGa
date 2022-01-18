import React from "react";
import { Slideshow, Slide, TextoSlide } from "../Carousel/slideshow";
import "./estilos.css";
import img1 from "../../../Resources/1.jpg";
import img2 from "../../../Resources/2.jpg";
import img3 from "../../../Resources/3.jpg";
import img4 from "../../../Resources/4.jpg";
import img5 from "../../../Resources/5.jpg";
import img6 from "../../../Resources/6.jpg";
import { Link } from "react-router-dom";
import c from "../Carousel/carousel.module.css";

export default function Carousel() {
  return (
    <main>
      <Slideshow
        controles={true}
        autoplay={true}
        velocidad="3000"
        intervalo="3000"
      >
        <Slide>
          <Link to="/catalogo">
            <img className={c.image} src={img1} alt="" />
          </Link>
          <TextoSlide colorFondo="blue">
            <p>Mejor calidad</p>
          </TextoSlide>
        </Slide>
        <Slide>
          <Link to="/catalogo">
            <img className={c.image} src={img2} alt="" />
          </Link>
          <TextoSlide colorFondo="blue">
            <p>A precios bajos</p>
          </TextoSlide>
        </Slide>
        <Slide>
          <Link to="/catalogo">
            <img className={c.image} src={img3} alt="" />
          </Link>
          <TextoSlide colorFondo="blue">
            <p>Todo en un solo lugar</p>
          </TextoSlide>
        </Slide>
        <Slide>
          <Link to="/catalogo">
            <img className={c.image} src={img4} alt="" />
          </Link>
          <TextoSlide colorFondo="blue">
            <p>Que esperas?</p>
          </TextoSlide>
        </Slide>
        <Slide>
          <Link to="/catalogo">
            <img className={c.image} src={img5} alt="" />
          </Link>
          <TextoSlide colorFondo="blue">
            <p>Quieres vender tus productos?</p>
          </TextoSlide>
        </Slide>
        <Slide>
          <Link to="/catalogo">
            <img className={c.image} src={img6} alt="" />
          </Link>
          <TextoSlide colorFondo="blue">
            <p>Esta es tu GanGa</p>
          </TextoSlide>
        </Slide>
      </Slideshow>
    </main>
  );
}
