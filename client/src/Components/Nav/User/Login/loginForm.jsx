import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import { FcGoogle } from "react-icons/fc";
import { LoginG2 } from "../../User/LoginGoogle/loginG2";
import { localLogin, getUserInfoGoogle } from "../../../Redux/Actions/actions";

export default function LoginForm() {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    mail: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  function validate(input) {
    let errors = {};
    if (!input.mail) {
      errors.mail = "Ingrese el correo con el que se ha registrado";
    } else if (!input.password) {
      errors.password = "Ingrese su contraseña.";
    }
    return errors;
  }

  function handleChange(e) {
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

  function handleSubmit(e) {
    e.preventDefault();
    // dispatch(inserteAccionAqui(input))
    dispatch(localLogin(input));
    // setInput({
    //   mail: "",
    //   password: "",
    // });
    console.log(localLogin)
    setTimeout(() => {
      dispatch(getUserInfoGoogle());
    }, 1000);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4 className="text-left pl-10 pb-3 pt-6 text-2xl">Inicia Sesión</h4>
        <hr className=" border-black mx-10"/>

        <div className="pt-10">
          <input className="w-96 border-gray-400 border-2 rounded pl-2"
            name="mail"
            type="email"
            placeholder="Correo electrónico"
            value={input.mail}
            onChange={handleChange}
          ></input>
          {errors.mail && <p>{errors.mail}</p>}
        </div>

        <div className="py-14">
          <input
            className="w-96 border-gray-400 border-2 rounded pl-2"
            name="password"
            type="password"
            placeholder="Contraseña"
            value={input.password}
            onChange={handleChange}
          ></input>
          {errors.password && <p>{errors.password}</p>}
        </div>

        <button
          className="border-gray-400 border-2 rounded px-3 py-1 text-xl"
          type="submit"
          value="submit"
          disabled={!(input.password && input.mail)}
        >
          Iniciar Sesión
        </button>
      </form>

      <h5 className="pt-12 pb-7 text-lg"> ¿Aún no tienes cuenta?</h5>
      <Link to="/registrarme">
        <button className="text-red-400 pb-5  text-lg"> Registrate aquí</button>
      </Link>

      <h5 className=" text-lg pb-12"> O entra con Google</h5>
      <div>
        {/* <button className="border-2 border-black px-2 text-xl"//onClick= {}
          >
            <FcGoogle className="inline-block px-1 w-10 h-10" /> Inicia sesión con Google
          </button> */}
        <LoginG2 />
      </div>
    </div>
  );
}
