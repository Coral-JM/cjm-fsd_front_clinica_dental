import React, { useEffect, useState } from "react";
import "./GetAllAppointments.css";
import { getAllAppointments} from "../../services/apiCalls";
import { InputText } from "../../common/InputText/InputText";
import { Container, Row, Col } from "react-bootstrap";

export const AllAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  const [filteredAppointments, setFilteredAppointments] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (appointments.length === 0) {

      getAllAppointments()
        .then((resultado) => {

          setAppointments(resultado.data.data);
          console.log(resultado.data.data);
        })
        .catch((error) => console.log(error));
    }
  }, []);

  useEffect(() => {
    if (searchText.trim() === "") {
      setFilteredAppointments(appointments);
    } else {
      const filtered = appointments.filter((appointment) => {
        const userName = appointment.User.name.toLowerCase();
        return userName.includes(searchText.toLowerCase());
      });
      setFilteredAppointments(filtered);
    }
  }, [searchText, appointments]);

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };


  return (
    <Container className="appDoctorDesign">
      <Row>
        <Col>
          <div className="tittle">todas las citas</div>
          <div className="appDesign">
            <input className="searchInput"
              type={"text"}
              // design={"searchInput"}
              placeholder={"Busca una cita..."}
              onChange={handleSearch}
            />


             {filteredAppointments.length > 0 ? (
              filteredAppointments.map((profile, index) => {
              return (
                <div className="getAllAppointments" key={index}>
                  <div className="nameAppointments">Paciente</div>
                  <div className="nameGetAllAppointments">
                    {profile.User.name}
                  </div>
                  <div className="nameAppointments">Fecha y hora</div>
                  <div className="nameGetAllAppointments">
                    {new Date(profile.date).toLocaleDateString()}
                  </div>
                  <div className="nameAppointments">Doctora</div>
                  <div className="nameGetAllAppointments">
                    {profile.Doctor.User.name}
                  </div>
                  <div className="nameAppointments">Tratamiento</div>
                  <div className="nameGetAllAppointments">
                    {profile.Service.name}
                  </div>
                  <div className="nameAppointments">Precio</div>
                  <div className="nameGetAllAppointments">
                    {profile.Service.price}
                  </div>
                  <div className="nameAppointments">Estado</div>
                  <div className="nameGetAllAppointments">
                    {profile.comments}
                  </div>
                </div>
                
              );
            })
          ) : (
            <div className="loading" key="loading">Cargando...</div>
          )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};
