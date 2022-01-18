import React from "react";
import logo from "../../Resources/logo.png";
import l from "../Logo/logo.module.css"

export default function Logo() {
  return (
    <div >
      <img className={l.logo} src={logo} alt="img" height="150px" />
    </div>
  );
}
