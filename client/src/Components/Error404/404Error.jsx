import React, { Component } from "react";
import error404 from "../Resources/404error.gif";
import Lottie from "react-lottie";
import "./error404.css";
import { Link } from "react-router-dom";
import {
  ContainerNotfound,
  Animationlottie,
  Buttomgradient,
  Gohouse,
} from "./error404.js";

export class Error404 extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: error404,
    };

    return (
      <ContainerNotfound>
        <h1>Pagina no encontrada</h1>
        <Animationlottie>
          <Lottie options={defaultOptions} />
        </Animationlottie>
        <Gohouse>
          <h3>Volver a casa: </h3>
          <Link to="/" className="textrouternf">
            <Buttomgradient>Aqui</Buttomgradient>
          </Link>
        </Gohouse>
      </ContainerNotfound>
    );
  }
}

// export default Error404;
