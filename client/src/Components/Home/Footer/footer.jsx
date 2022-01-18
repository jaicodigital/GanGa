import React from "react";
import "./footer.css";
import Newsletter from "../NewsLetter/newsletter";

export default function FooterPage() {
  return (
    <div className="body">
      <div fluid="true" className="text-center text-md-left">
        <div>
          <div>
            <h5 className="titulo">GanGa</h5>
            <h5 className="eslogan">Somos </h5>
          </div>
          <div>
            <div className="texTuEres">
              <h3>
                GANGA nace con la intensión de incorporar productos asequibles a
                todo tipo de publico, dentro de sus capacidades, siempre hay un
                producto para cada día de buena calidad y al mejor precio. Y tú
                que esperas? Ven por tu GanGa.
              </h3>
            </div>
          </div>
          <Newsletter />
          <div>
            <ul>
              <h1 className="ubicacion">Estamos ubicados</h1>
            </ul>
            <div className="textUbicacion">
              <h3>En toda Colombia</h3>
              <h3>Próximamente en Argentina</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div fluid="true">
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://ganga-app-78mh2uop7-eze-yisus.vercel.app/catalogo">
            {" "}
            GanGa{" "}
          </a>
        </div>
      </div>
    </div>
  );
}
