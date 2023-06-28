import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./UpdateUser.css";
import { getProfile } from "../../services/apiCalls";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { InputText } from "../../common/InputText/InputText";
import { updateProf } from "../../services/apiCalls";
import { useNavigate } from "react-router-dom";

export const UpdateProfile = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const [body, setBody] = useState({});
  const datos = useSelector(userData);
  const token = datos?.credentials?.token;

  useEffect(() => {
    if (user) {
      getProfile(token)
        .then((res) => {
          console.log(res.data);
          if (res.data && res.data.user) {
            setUser(res.data.user);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  const updateMe = () => {

    updateProf(body, token)
    .then(() => {

      setTimeout(() => {
        navigate("/profile");
      }, 1500);

    })
    .catch((error) => console.log(error));
  }
  ;

  // console.log("Token:", token);

  return (
    <Container>
      <Row className="userBody">
        <div className="userTittle">{user.name}</div>
        <Col >
          <div className="dataUser">
          <div style={{ width: "24em" }} className="userLines">
            Nombre y apellido
          </div>

            <InputText
              design={"inputUpdate"}
              type={"text"}
              name={"name"}
              placeholder={user.name}
              state={setBody}
            />

          <div style={{ width: "24em" }} className="userLines">
            Email
          </div>
          <InputText
              design={"inputUpdate"}
              type={"text"}
              name={"email"}
              placeholder={user.email}
              state={setBody}
            />

          <div style={{ width: "24em" }} className="userLines">
            Password
          </div>
          <InputText
              design={"inputUpdate"}
              type={"password"}
              name={"password"}
              placeholder={"********"}
              state={setBody}
            />
          </div>
        </Col>
        <div onClick= {()=> updateMe()} style={{ width: "15em" }} className="modificarDatos">
          Modificar datos
        </div>
      </Row>
    </Container>
  );
};
