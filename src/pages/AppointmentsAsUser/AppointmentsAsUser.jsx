import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { Container, Row, Col } from "react-bootstrap";
import "./AppointmentsAsUser.css";
import { getAppointmentsUser } from "../../services/apiCalls";
import { InputText } from "../../common/InputText/InputText";
import Form from "react-bootstrap/Form";
import { updateAppointment } from "../../services/apiCalls";
import { useNavigate } from 'react-router-dom'

export const AppointmentsAsUser = () => {
  const [appointments, setAppointmentsUser] = useState([]);
  const navigate = useNavigate();
  const [user] = useState({});
  const [body, setBody] = useState({});
  const datos = useSelector(userData);
  const token = datos?.credentials?.token;

  useEffect(() => {
    if (user && appointments?.length === 0) {
      getAppointmentsUser(token)
        .then((res) => {
          setAppointmentsUser(res.data.data);
          console.log(res);
        })
        .catch((error) => console.log(error));
    }
  }, [token]);

  const updateApp = () => {
    updateAppointment(body, token)
      .then(() => {
        setTimeout(() => {
          navigate("/profile");
        }, 1500);
      })
      .catch((error) => console.log(error));
  };

  const [services, setServices] = useState([
    {
      id: 1,
      name: "Exámen y limpieza dental",
    },
    {
      id: 2,
      name: "Tratamiento de restauración dental",
    },
    {
      id: 3,
      name: "Tratamiento de ortodoncia",
    },
  ]);
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      name: "Ana Saddouki",
    },
    {
      id: 2,
      name: "Cristina Puig",
    },
  ]);

  return (
    <Container>
      <Row>
        <Col>
          <div className="appointmentsUserBody">
            <div className="appointmentsTittle">mis citas</div>

            {appointments?.length > 0 ? (
              appointments.map((profile) => {
                
                return (
                  <>
                    <div className="boxInfo">
                      <div className="appointmentsLines">Tratamiento</div>
                      <div className="appointmentsApi">
                        {profile.Service.name}
                      </div>

                      <div className="appointmentsLines">Doctora</div>
                      <div className="appointmentsApi">
                        {profile.Doctor.User.name}
                      </div>

                      <div className="appointmentsLines">Fecha y hora</div>
                      <div className="appointmentsApi">
                        {new Date(profile.date).toLocaleString()}
                      </div>

                      <div className="newDate">
                        <div className="appDate">
                          <InputText
                            type={"datetime-local"}
                            name={"date"}
                            state={setBody}
                          />
                        </div>
                      </div>
                    <div className="buttonsApp">
                    <div onClick={() => updateApp()} className="modificarCita">
                      Modificar cita
                    </div>
                    <div className="eliminarCita">Eliminar cita</div>
                    </div>
                    </div>
                  </>
                );
              })
            ) : (
              <div className="loading">Cargando...</div>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};
