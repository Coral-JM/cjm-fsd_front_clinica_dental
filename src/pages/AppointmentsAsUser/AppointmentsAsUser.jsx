import React, {useState, useEffect} from "react";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { Container, Row, Col } from "react-bootstrap";
import './AppointmentsAsUser.css'
import { getAppointmentsUser } from "../../services/apiCalls";
import { InputText } from "../../common/InputText/InputText";
import {} from "../../services/apiCalls"

export const AppointmentsAsUser = () => {
    const [appointments, setAppointmentsUser] = useState ([])
    const [user] = useState({});
    const [body, setBody] = useState({});
    const datos = useSelector(userData);
    const token = datos?.credentials?.token;



    useEffect (() => {

        if (user && appointments?.length === 0) {
            getAppointmentsUser(token)
            
            .then((res) => {
                setAppointmentsUser(res.data.data)
                console.log(res);
            })
            .catch((error) => console.log(error))
        }

    }, [token])

    const updateApp = () => {

        updateAppointment(body, token)
        .then(() => {
    
          setTimeout(() => {
            navigate("/profile");
          }, 1500);
    
        })
        .catch((error) => console.log(error));
      }

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
                                    <div className="appointmentsLines">Fecha y hora</div>
                                    <div className="appointmentsApi">{new Date (profile.data).toLocaleDateString()}</div>
                                    <div className="appointmentsApi">{profile.time}</div>
        
                                    <div className="appointmentsLines">Tratamiento</div>
                                    <div className="appointmentsApi">{profile.Service.name}</div>
                                    <InputText
                                      design={"inputUpdateApp"}
                                      type={"text"}
                                      name={"name"}
                                      placeholder={user.name}
                                      state={setBody}
                                    />

                                    <div className="appointmentsLines">Doctora</div>
                                    <div className="appointmentsApi">{profile.Doctor.User.name}</div>

                                    <div className="modificarCita">Modificar cita</div>
                                    <div className="eliminarCita">Eliminar cita</div>
                                    </>
                                )
                            })
                        ) : (
                            <div className="loading">Cargando...</div>
                        )
                        }     

                    </div>
                </Col>
            </Row>
        </Container>
    );
};