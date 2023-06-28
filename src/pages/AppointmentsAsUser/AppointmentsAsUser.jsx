import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { Container, Row, Col } from "react-bootstrap";
import "./AppointmentsAsUser.css";
import { getAppointmentsUser } from "../../services/apiCalls";
import { InputText } from "../../common/InputText/InputText";
import Form from "react-bootstrap/Form";
import { updateAppointment } from "../../services/apiCalls";

export const AppointmentsAsUser = () => {
  const [appointments, setAppointmentsUser] = useState([]);
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
                    {/* <div className="formUpdateAppointment">
                      <Form.Select 
                        name={"service_id"}
                        >
                        <option>{profile.Service.name}</option>
                        {services.map((service) => {
                          return (
                            <option key={service.id} value={service.id}>
                              {service.name}
                            </option>
                          );
                        })}
                      </Form.Select>
                    </div> */}


                    <div className="appointmentsLines">Doctora</div>
                    <div className="appointmentsApi">
                      {profile.Doctor.User.name}
                    </div>

                    {/* <div className="formUpdateAppointment">
                      <Form.Select 
                        name={"doctor_id"}
                        >
                        <option>{profile.Doctor.User.name}</option>
                        {doctors.map((doctor) => {
                          return (
                            <option key={doctor.id} value={doctor.id}>
                              {doctor.name}
                            </option>
                          );
                        })}
                      </Form.Select>
                    </div> */}
                    <div className="appointmentsLines">Fecha y hora</div>
                        <div className="appointmentsApi">
                            {new Date(profile.data).toLocaleDateString()}&nbsp;&nbsp;&nbsp;
                            {profile.time}
                        </div>
                    
                        <div className="newDate">
                            <div className="appDate">
                                <InputText
                                type={"date"}
                                name={"date"}
                                state={setBody}

                                />
                            </div>
                            <div className="appTime">
                                <InputText
                                  type={"time"}
                                  name={"time"}
                                  state={setBody}

                                />
                            </div>
                        </div>
                    </div>
                    <div onClick={() => updateApp()} className="modificarCita">
                      Modificar cita
                    </div>
                    <div className="eliminarCita">Eliminar cita</div>
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
