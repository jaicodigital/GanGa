import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userMessage } from "../../Redux/Actions/actions";
import styles from "./contactForm.module.css";
import animate from "../../Resources/contactForm.gif";

export default function ContactForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [input, setInput] = useState({
    nombre: "",
    ciudad: "",
    telefono: "",
    correo: "",
    mensaje: "",
  });

  const [errors, setErrors] = useState({});

  function handleInput(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function validate(input) {
    var valoresAceptados = /^[0-9]+$/;
    let errors = {};

    if (!input.nombre) {
      errors.nombre = "*Hace falta tu nombre*";
    } else if (!input.ciudad) {
      errors.ciudad = "*Agrega tu ciudad*";
    } else if (!input.telefono) {
      errors.telefono = "*Hizo falta tu número de telefono*";
    } else if (!input.telefono.match(valoresAceptados)) {
      errors.telefono2 = "*Solo se puede agregar números*";
    } else if (!input.correo) {
      errors.correo = "*Y tu correo?*";
    } else if (!input.mensaje) {
      errors.mensaje = "*Tu mensaje es muy importante*";
    } else if (Object.entries(errors).length === 0) {
      errors.button = (
        <button type="submit" className={styles.button}>
          Enviar mensaje
        </button>
      );
    } else {
      errors.ok = true;
    }
    return errors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(userMessage(input));
    setInput({
      nombre: "",
      ciudad: "",
      telefono: "",
      correo: "",
      mensaje: "",
    });
    navigate("/");
  }

  return (
    <div className={styles.bgImagen}>
      <div className={styles.container}>
        <div className={styles.animate}>
          <img src={animate} alt="" />
        </div>
        <div className={styles.bc}>
          <h1 className={styles.title}>PONTE EN CONTACTO</h1>
          <h3 className={styles.msj}>Cualquier duda no dudes en escribirnos</h3>
          <h3 className={styles.msj2}> estamos para colaborarte.</h3>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                className={styles.input}
                placeholder="Tu nombre *"
                value={input.nombre}
                name="nombre"
                onChange={handleInput}
              />
              {errors.nombre && <p>{errors.nombre}</p>}
            </div>
            {/* <br /> */}
            <div>
              <input
                type="text"
                className={styles.input}
                placeholder="Ciudad *"
                value={input.ciudad}
                name="ciudad"
                onChange={handleInput}
              />
              {errors.ciudad && <p>{errors.ciudad}</p>}
            </div>
            {/* <br /> */}
            <div>
              <input
                type="text"
                className={styles.input}
                placeholder="Telefono *"
                value={input.telefono}
                name="telefono"
                onChange={handleInput}
              />
              {errors.telefono && <p>{errors.telefono}</p>}
              {errors.telefono2 && <p>{errors.telefono2}</p>}
            </div>
            {/* <br /> */}
            <div>
              <input
                type="text"
                className={styles.input}
                placeholder="Correo electronico *"
                value={input.correo}
                name="correo"
                onChange={handleInput}
              />
              {errors.correo && <p>{errors.correo}</p>}
            </div>
            {/* <br /> */}
            <div>
              <textarea
                type="text"
                className={styles.input}
                placeholder="Mensaje *"
                value={input.mensaje}
                name="mensaje"
                onChange={handleInput}
              />
              {errors.mensaje && <p>{errors.mensaje}</p>}
            </div>
            {/* <br /> */}
            {errors.button}
          </form>
        </div>
      </div>
    </div>
  );
}
