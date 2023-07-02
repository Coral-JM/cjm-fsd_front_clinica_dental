import React, { useEffect, useState } from "react";
import "./Login.css";
import { InputText } from "../../common/InputText/InputText";
import { checkError } from "../../services/useful";
import { loginMe } from "../../services/apiCalls";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
// import { inputHandler } from "../../services/useful";
import { useDispatch } from "react-redux";
import jwtDecode from "jwt-decode";
import { login } from "../userSlice";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [token, setToken] = useState("");

  const [userError, setUserError] = useState({
    credentials: "",
  });

  const [welcome, setWelcome] = useState("");

  const submitHandler = (e, body) => {
    e.preventDefault();
    loginMe(body)
      .then((res) => {
        setToken(res);
      })
      .catch((error) => {
        console.log(error);
        setUserError({
          credentials: error.response.data.message,
        });
      });
  };

  const inputCheck = (e) => {
    let mensajeError = checkError(e.target.name, e.target.value);

    setUserError((prevState) => ({
      ...prevState,
      [e.target.name + "Error"]: mensajeError,
    }));
  };

  useEffect(() => {
    if (token) {
      let decoded = jwtDecode(token);
      console.log("Role ID:"+  decoded.roleId)
      dispatch(
        login({
          token: token,
          name: decoded.name,
          userId: decoded.userId,
          role_id: decoded.roleId,
        })
      );
      navigate("/");
    }
  }, [token]);

  return (
    <Container>
      <Row>
        <Col>
          <div className="loginDesign">
            <div className="tittle">login</div>
            {welcome !== "" ? (
              <div>{welcome}</div>
            ) : (
              <div className="userSubmit">
                {/* La utilidad de la siguiente linea es renderizar un hook a tiempo real en el DOM */}
                {/* {<pre>{JSON.stringify(user, null, 2)}</pre>} */}

                <InputText
                  type={"email"}
                  design={
                    !userError.emailError
                      ? "normalInput"
                      : "normalInput errorInput"
                  }
                  placeholder={"Email"}
                  name={"email"}
                  state={setUser}
                  onBlurFunction={inputCheck}
                />
                <div className="errorText">{userError.emailError}</div>
                <InputText
                  type={"password"}
                  design={
                    !userError.passwordError
                      ? "normalInput"
                      : "normalInput errorInput"
                  }
                  placeholder={"Password"}
                  name={"password"}
                  state={setUser}
                  onBlurFunction={inputCheck}
                />
                <div className="errorText">{userError.passwordError}</div>
              </div>
            )}
            <div
              onClick={(e) => {
                submitHandler(e, user);
              }}
              className="botonLogin"
            >
              Login
            </div>
            <div className="subtittle">
              ¿No tienes una cuenta?
              <div className="linkSubmit" onClick={() => navigate("/register")}>
                Regístrate
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
