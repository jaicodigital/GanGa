import { useEffect } from "react";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function LoginSuccess() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      window.close();
    }, 500);
  }, []);
  navigate("/");
  return <div>Inciaste Sesión!</div>;
}
