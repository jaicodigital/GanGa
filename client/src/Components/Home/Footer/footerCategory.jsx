import React from "react";
import "./footerCategory.css";

export default function FooterCatalog() {
  return (
    <div className="body">
      <div fluid="true" className="text-center text-md-left">
          <div>
            <h5 className="titulo">GanGa</h5>
            <h5 className="eslogan">Somos </h5>
          </div>
          <div>
            <div className="texTuEres">
              <h3>GANGA nace con la intensión de incorporar productos asequibles
              a todo tipo de publico, dentro de sus capacidades, siempre hay un producto para cada día
              de buena calidad y al mejor precio. Y tú que esperas? Ven por tu GanGa.</h3>
            </div>
          </div>      
          <div>
            <ul>
              <h1 className="ubicacion">Estamos ubicados</h1>
            </ul>
            <div className="textUbicacion">
              <h3>En toda Colombia</h3>
              <h3>Próximamente en Argentina</h3>
            </div>
          </div>
          <div>
            <ul>
              <h1 className="ubicacionCategory">Vende tus productos</h1>
            </ul>
            <div className="textUbicacionCategory">
              <h3>Ten un equipo detrás de ti, con buen soporte las 24 horas</h3>
              <h3>aumenta tus ingresos, únete a GanGa. No esperes más.</h3>
              <h3>Puedes vender productos nuevos y usados, con garantía.</h3>
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