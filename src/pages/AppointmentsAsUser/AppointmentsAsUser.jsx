import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../userSlice";
import { Container, Row, Col } from "react-bootstrap";
import "./AppointmentsAsUser.css";
import { getAppointmentsUser, updateAppointment } from "../../services/apiCalls";
import { useNavigate } from 'react-router-dom';

export const AppointmentsAsUser = () => {
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [appointments, setAppointmentsUser] = useState([]);
  const navigate = useNavigate();
  const datos = useSelector(userData);
  const token = datos?.credentials?.token;
  const [selectedAppointmentId, setSelectedAppointmentId] = useState(null);



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

  const updateApp = () => {
    if (selectedAppointment) {
      updateAppointment(selectedAppointment.id, selectedAppointment.date, token)
        .then(() => {
          setTimeout(() => {
            navigate("/profile");
          }, 1500);
        })
        .catch((error) => console.log(error));
    }
  };
  const handleDateChange = (e, appointment) => {
    const updatedAppointment = {
      ...appointment,
      date: e.target.value,
    };
    setSelectedAppointment(updatedAppointment);
  };


  return (
    <Container>
      <Row>
        <Col>
          <div className="appointmentsUserBody" >
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
                      <div className="changeApp">¿Quieres modificar la fecha de la cita?</div>

                      <div className="newDate">
                            <div className="appDate">
                                <input
                                type={"datetime-local"}
                                name={"date"}
                                value={
                                  selectedAppointment?.id === appointment.id
                                    ? selectedAppointment.date
                                    : ""
                                }
                                onChange={(e) => handleDateChange(e, appointment)}
                                />
                            </div>
                      </div>


                      <div 
                      onClick={updateApp} 
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
