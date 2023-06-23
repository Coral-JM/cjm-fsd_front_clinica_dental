import React, { useEffect, useState }  from "react";
import './GetAllAppointments.css';
import { getAllAppointments } from "../../services/apiCalls";

export const AllAppointments = () => {
    const [appointments, setAppointments] = useState ([])

    useEffect (() => {
        if (appointments.length === 0) {

            getAllAppointments(appointments)
                .then((resultado) => {
                    setAppointments(resultado.data.data)
                    console.log(resultado.data.data);

                })
                .catch((error) => console.log(error))
        }
    }, [])

    return (
        <div className="container">
            <div className="row">
            <div className="col">
            <div className="tittle">todas las citas</div>
                {getAllAppointments.length > 0 
                    ? (
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