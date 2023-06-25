import React, { useEffect, useState }  from "react";
import './GetAllAppointments.css';
import { getAllAppointments, searchAppointment } from "../../services/apiCalls";
import { InputText } from "../../common/InputText/InputText";

export const AllAppointments = () => {
    const [appointments, setAppointments] = useState ([])
    const [criteria, setCriteria] = useState("");

    useEffect (() => {
        if (appointments.length === 0) {

            getAllAppointments()
                .then((resultado) => {
                    setAppointments(resultado.data.data)
                    console.log(resultado.data.data);

                })
                .catch((error) => console.log(error))
        }
    }, [appointments])

    useEffect (() => {
        if (criteria.trim().length > 0) {
            const bring = setTimeout(() => {
                searchAppointment(criteria)
                .then((resultado) => {
                    console.log("He buscado");
                    setAppointments(resultado.data.data);
                })
                .catch((error) => console.log(error))
            },350);

            return () => clearTimeout(bring);        
        } 
        else if (criteria === "") {
            getAllAppointments()
            .then((resultados) => {
                setAppointments(resultados.data.data);
            })
            .catch((error) => console.log(error));
            
        }
    }, [criteria] );

    const inputHandler = (e) => {
        setCriteria(e.target.value)
    }

    return (
        <div className="container">
            <div className="row">
            <div className="col">
            <div className="tittle">todas las citas</div>
            <div className="searchInput"> 
              <InputText
                type={"text"}
                design={"normalInput"}
                placeholder={"Busca una cita..."}
                name={"criteria"}
                functionHandler={inputHandler}
                onBlurFunction={() => {}}
              />
            </div>
                {appointments.length > 0 ? (
                        appointments.map((profile) => {
                            return (
                                <div className="getAllAppointments">
                                    <div className="nameAppointments">Paciente</div>
                                    <div className="nameGetAllAppointments">{profile.User.name}</div>
                                    <div className="nameAppointments">Fecha y hora</div>
                                    <div className="nameGetAllAppointments">{profile.comments}</div>
                                    <div className="nameAppointments">Doctora</div>
                                    <div className="nameGetAllAppointments">{profile.Doctor.User.name}</div>
                                    <div className="nameAppointments">Tratamiento</div>
                                    <div className="nameGetAllAppointments">{profile.Service.name}</div>
                                    <div className="nameAppointments">Precio</div>
                                    <div className="nameGetAllAppointments">{profile.Service.price}</div>
                                </div>
                            )
                        })
                    )
                    : (
                        <div className="loading">Cargando...</div>
                    )
                }
                </div>
            </div>
        </div>
    )
}