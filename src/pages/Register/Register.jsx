import React, { useState } from 'react';
import './Register.css'
import { InputText } from "../../common/InputText/InputText";
import { checkError } from "../../services/useful";
import { useNavigate } from "react-router-dom";
import { registerMe } from "../../services/apiCalls";


export const Register = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [userError, setUserError] = useState({
    nameError: "",
    emailError: "",
    passwordError: "",
  });

  const inputCheck = (e) => {

    let mensajeError = checkError(e.target.name, e.target.value);

    setUserError((prevState) => ({
      ...prevState,
      [e.target.name + "Error"]: mensajeError,
    }));
  };
  
    const regMe = () => {

      registerMe(user)
      .then(() => {

        setTimeout(() => {
          navigate("/");
        }, 2500);

      })
      .catch((error) => console.log(error));
    };

  return (
    <div className='registerDesign'>
      <div className="tittle">registro</div>
        <div>
          <div className="userSubmit">Nombre y apellido</div>
          <InputText
            type={"text"}
            design={
              userError.nameError === ""
                ? "normalInputRegister"
                : "normalInputRegister errorInput"
            }
            placeholder={"Ingrese su nombre y apellido"}
            name={"name"}
            state={setUser}
            onBlurFunction={inputCheck}
          />
          <div className="errorTextRegister">{userError.nameError}</div>
        <div>
        <div className="userSubmit">Email</div>
          <InputText
            type={"email"}
            design={
              userError.emailError === ""
                ? "normalInputRegister"
                : "normalInput errorInput"
            }
            placeholder={"Ingrese su email"}
            name={"email"}
            state={setUser}
            onBlurFunction={inputCheck}
          />
          <div className="errorText">{userError.emailError}</div>

        </div>
        <div>
        <div className="userSubmit">Password</div>
          <InputText
            type={"password"}
            design={
              userError.passwordError === ""
                ? "normalInputRegister"
                : "normalInput errorInput"
            }
            placeholder={"Ingrese su contraseña"}
            name={"password"}
            state={setUser}
            onBlurFunction={inputCheck}
          />
          <div className="errorText">{userError.passwordError}</div>
        </div>
        </div>
        <div onClick={() => regMe()} className="botonRegister">Registro</div>
        <div className='subtittle'>¿Ya tienes una cuenta?
        <div className="linkSubmit" onClick={()=>navigate("/login")}>Login</div>
        </div>
    </div>
  );
};

