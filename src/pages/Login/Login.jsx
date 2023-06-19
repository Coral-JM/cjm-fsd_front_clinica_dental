import React, { useState } from "react";
import jwt_decode from "jwt-decode";
import "./Login.css";
import { InputText } from "../../common/InputText/InputText";
import { checkError } from "../../services/useful";
import { loginMe } from "../../services/apiCalls";
import { useNavigate } from "react-router-dom";

export const Login = () => {

  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [credentialsError, setCredentialsError] = useState({
    emailError: "",
    passwordError: "",
  });

  const [welcome, setWelcome] = useState("");

  const inputHandler = (e) => {

    setCredentials((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const inputCheck = (e) => {
    let mensajeError = checkError(e.target.name, e.target.value);

    setCredentialsError((prevState) => ({
      ...prevState,
      [e.target.name + "Error"]: mensajeError,
    }));
  };

  const logMe = () => {
    loginMe(credentials)
      .then((resultado) => {
        let decodificado = jwt_decode(resultado.data.token);
        // console.log(resultado.data.token)
        // console.log(decodificado);

        setTimeout(() => {
          navigate("/");
        }, 3500);

        setWelcome(`Bienvenid@ de nuevo ${decodificado.name}`);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="loginDesign">
      {welcome !== "" ? (
        <div>{welcome}</div>
      ) : (
        <div>
          {/* La utilidad de la siguiente linea es renderizar un hook at tiempo real en el DOM */}
          {/* {<pre>{JSON.stringify(credentials, null, 2)}</pre>} */}

          <InputText
            type={"email"}
            design={
              credentialsError.emailError === ""
                ? "normalInput"
                : "normalInput errorInput"
            }
            placeholder={"Email"}
            name={"email"}
            functionHandler={inputHandler}
            onBlurFunction={inputCheck}
          />
          <div className="errorText">{credentialsError.emailError}</div>
          <InputText
            type={"password"}
            design={
              credentialsError.passwordError === ""
                ? "normalInput"
                : "normalInput errorInput"
            }
            placeholder={"Password"}
            name={"password"}
            functionHandler={inputHandler}
            onBlurFunction={inputCheck}
          />
          <div className="errorText">{credentialsError.passwordError}</div>


        </div>
      )}
            <div onClick={() => logMe()} className="botonLogin">
            Login
            </div>
    </div>
  );
};