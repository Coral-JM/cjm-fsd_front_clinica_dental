import React, { useState } from 'react';
import './Register.css'
import { InputText } from "../../common/InputText/InputText";
import { checkError } from "../../services/useful";
import { useNavigate } from "react-router-dom";
import { registerMe } from "../../services/apiCalls";
// import jwt_decode from "jwt-decode";

export const Register = () => {

  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [credentialsError, setCredentialsError] = useState({
    nameError: "",
    emailError: "",
    passwordError: "",
  });

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
  
    const regMe = () => {

      registerMe(credentials)
      .then(() => {

        setTimeout(() => {
          navigate("/");
        }, 3500);

      })
      .catch((error) => console.log(error));
    };

  return (
    <div className='registerDesign'>
        <div>
          <div className="userSubmit">Nombre y apellido</div>
          <InputText
            type={"text"}
            design={
              credentialsError.nameError === ""
                ? "normalInputRegister"
                : "normalInputRegister errorInput"
            }
            placeholder={"Ingrese su nombre y apellido"}
            name={"name"}
            functionHandler={inputHandler}
            onBlurFunction={inputCheck}
          />
          <div className="errorTextRegister">{credentialsError.nameError}</div>
        <div>
        <div className="userSubmit">Email</div>
          <InputText
            type={"email"}
            design={
              credentialsError.emailError === ""
                ? "normalInputRegister"
                : "normalInput errorInput"
            }
            placeholder={"Ingrese su email"}
            name={"email"}
            functionHandler={inputHandler}
            onBlurFunction={inputCheck}
          />
          <div className="errorText">{credentialsError.emailError}</div>

        </div>
        <div>
        <div className="userSubmit">Password</div>
          <InputText
            type={"password"}
            design={
              credentialsError.passwordError === ""
                ? "normalInputRegister"
                : "normalInput errorInput"
            }
            placeholder={"Ingrese su contraseña"}
            name={"password"}
            functionHandler={inputHandler}
            onBlurFunction={inputCheck}
          />
          <div className="errorText">{credentialsError.passwordError}</div>
        </div>
        </div>
        <div onClick={() => regMe()} className="botonRegister">Registro</div>
        <div className='subtittle'>¿Ya tienes una cuenta?
        <div className="linkSubmit" onClick={()=>navigate("/login")}>Login</div>
        </div>
    </div>
  );
};

