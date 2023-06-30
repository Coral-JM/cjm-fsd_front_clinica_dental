import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { Container, Row, Col } from "react-bootstrap";
import "./AppointmentsAsUser.css";
import { getAppointmentsUser } from "../../services/apiCalls";
// import { InputText } from "../../common/InputText/InputText";
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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBody((prevBody) => ({
      ...prevBody,
      [name]: value,
    }));
  };

const [editingAppointmentId, setEditingAppointmentId] = useState(null);

const startEditingAppointment = (id) => {
  setEditingAppointmentId(id);
};

const updateApp = () => {
  updateAppointment(body, token, editingAppointmentId)
    .then(() => {
      // setTimeout(() => {
        navigate("/profile");
      // }, 1500);
    })
    
    .catch((error) => console.log(error));
}


  return (
    <Container>
      <Row>
        <Col>
          <div className="appointmentsUserBody" >
            <div className="appointmentsTittle">mis citas</div>

            {appointments?.length > 0 ? (
              appointments.map((profile) => {
                
                
                return (
                  <>
                    <div className="boxInfo" key={profile.id}>
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
                      <div className="changeApp">¿Quieres modificar la fecha de la cita?</div>
                      <div onClick={() => startEditingAppointment(profile.id)} className="modificarCita">
                      Modificar cita
                    </div>
                      {/* <div className="newDate">
                        <div className="appDate">
                          <input
                            type={"datetime-local"}
                            name={"date"}
                            onChange={handleInputChange}
                            // disabled={!isAppSelected}
                            disabled={editingAppointmentId !== profile.id}
                            
                          />
                        </div>
                      </div> */}
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
