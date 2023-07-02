import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../userSlice";
import { Container, Row, Col } from "react-bootstrap";
import "./AppointmentsAsUser.css";
import {
  getAppointmentsUser,
  updateAppointment,
} from "../../services/apiCalls";
import { useNavigate } from "react-router-dom";

export const AppointmentsAsUser = () => {
  const [selectedAppointment, setSelectedAppointment] = useState([]);
  const [appointments, setAppointmentsUser] = useState([]);
  const navigate = useNavigate();
  const datos = useSelector(userData);
  const token = datos?.credentials?.token;
  const [selectedAppointmentId, setSelectedAppointmentId] = useState([]);

  useEffect(() => {
    if (appointments?.length === 0) {
      getAppointmentsUser(token)
        .then((res) => {
          setAppointmentsUser(res.data.data);
          console.log(res);
        })
        .catch((error) => console.log(error));
    }
  }, [token]);

  const handleDateChange = (e, appointmentId) => {
    setSelectedAppointmentId(appointmentId);
    const updatedAppointments = appointments.map((appointment) => {
      if (appointment.id === appointmentId) {
        return {
          ...appointment,
          date: e.target.value,
        };
      }
      return appointment;
    });
    setAppointmentsUser(updatedAppointments);
  };

  const updateApp = (appointmentId) => {
    const selectedAppointment = appointments.find(
      (appointment) => appointment.id === appointmentId
    );
    if (selectedAppointment) {
      const { id, date } = selectedAppointment;
      console.log(id, date);
      updateAppointment(id, date, token)
        .then(() => {
          setTimeout(() => {
            navigate("/profile");
          }, 1500);
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <div className="appointmentsUserBody">
            <div className="appointmentsTittle">mis citas</div>

            {appointments?.length > 0 ? (
              appointments.map((appointment) => {
                return (
                  <div className="boxInfo" key={appointment.id}>
                    <div className="appointmentsLines">Tratamiento</div>
                    <div className="appointmentsApi">
                      {appointment.Service.name}
                    </div>
                    <div className="appointmentsLines">Doctora</div>
                    <div className="appointmentsApi">
                      {appointment.Doctor.User.name}
                    </div>
                    <div className="appointmentsLines">Fecha y hora</div>
                    <div className="appointmentsApi">
                      {new Date(appointment.date).toLocaleString()}
                    </div>
                    <div className="changeApp">
                      ¿Quieres modificar la fecha de la cita?
                    </div>

                    <div className="newDate">
                      <div className="appDate">
                        <input
                          type={"datetime-local"}
                          name={"date"}
                          value={
                            selectedAppointmentId === appointment.id
                              ? appointment.date
                              : ""
                          }
                          onChange={(e) => handleDateChange(e, appointment.id)}
                        />
                      </div>
                    </div>

                    <div
                      onClick={() => updateApp(appointment.id)}
                      className="modificarCita"
                      disabled={selectedAppointmentId !== appointment.id}
                    >
                      Modificar cita
                    </div>
                  </div>
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
