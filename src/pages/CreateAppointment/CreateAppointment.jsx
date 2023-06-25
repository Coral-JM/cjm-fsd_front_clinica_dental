import React, { useEffect, useState } from "react";
import "./CreateAppointment.css";
import { InputText } from "../../common/InputText/InputText";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { bookAppointment } from "../../services/apiCalls";


export const CreateAppointment = () => {
const navigate = useNavigate();

    const [infoAppointment, setInfoAppointment] = useState({
      date: "",
      service_id: "",
      doctor_id: "",
    }); 
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
    const inputHandler = (e) => {
      setInfoAppointment((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    };
    const checkError = (e) => {};

    const bookApp = () => {
        bookAppointment(infoAppointment, credentials);
        setTimeout(() => {
          navigate("/createappointment");
        }, 500);
      };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="tittle">pide tu cita</div>
          <div className="createAppointmentDesign">
            <Form.Select className="appointmentSelector"
                name={"service_id"}
                onChange={(e) => inputHandler(e)}
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
            <Form.Select className="doctorSelector"
                name={"doctor_id"}
                onChange={(e) => inputHandler(e)}
                aria-label="Default select example"
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
              <InputText 
              type={"datetime-local"} 
              name={"date"} 
              changeFunction={(e) => inputHandler(e)}
              blurFunction={(e) => checkError(e)}/>
            </div>
            <div onClick= {() => { bookApp() }}
            className="buttonCreateAppointment">Reserva tu cita</div>
          </div>
        </div>
      </div>
    </div>
  );
};
