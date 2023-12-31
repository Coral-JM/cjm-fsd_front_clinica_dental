import React, { useState, useEffect } from "react";
import "./CreateAppointment.css";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { bookAppointment } from "../../services/apiCalls";
import { userData } from "../userSlice";
import { useSelector } from "react-redux";
import { Container, Row, Col } from 'react-bootstrap'

export const CreateAppointment = () => {
  const navigate = useNavigate();
  const datos = useSelector(userData);
  const token = datos?.credentials?.token;
  // console.log(token)

  const [infoAppointment, setInfoAppointment] = useState({
    service_id: "",
    user_id: datos?.data?.user_id,
    doctor_id: "",
    date: "",
  });
  // console.log("userData:", datos);
  // console.log(infoAppointment);
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

  const bookApp = () => {
    // console.log(infoAppointment);
    bookAppointment(infoAppointment, token);

    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  return (
    <Container>
      <Row>
        <Col>
          <div className="tittle">pide tu cita</div>
          <div className="createAppointmentDesign">
            <Form.Select
              className="appointmentSelector"
              name={"service_id"}
              value={infoAppointment.service_id}
              onChange={(e) =>
                setInfoAppointment({
                  ...infoAppointment,
                  service_id: e.target.value,
                })
              }
            >
              <option>Selecciona un tratamiento</option>
              {services.map((service) => {
                return (
                  <option key={service.id} value={service.id}>
                    {service.name}
                  </option>
                );
              })}
            </Form.Select>
            <Form.Select
              className="doctorSelector"
              name={"doctor_id"}
              value={infoAppointment.doctor_id}
              onChange={(e) =>
                setInfoAppointment({
                  ...infoAppointment,
                  doctor_id: e.target.value,
                })
              }
            >
              <option>Selecciona una doctora</option>
              {doctors.map((doctor) => {
                return (
                  <option key={doctor.id} value={doctor.id}>
                    {doctor.name}
                  </option>
                );
              })}
            </Form.Select>

            <div className="containerDate">
              <input
                type="datetime-local"
                name="date"
                value={infoAppointment.date}
                onChange={(e) =>
                  setInfoAppointment({
                    ...infoAppointment,
                    date: e.target.value,
                  })
                }
              />
            </div>
            <div onClick={() => bookApp()} className="buttonCreateAppointment">
              Reserva tu cita
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
