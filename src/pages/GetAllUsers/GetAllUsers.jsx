import React, { useEffect, useState }  from "react";
import './GetAllUsers.css';
import { getAllUsers } from "../../services/apiCalls";
import { Container, Row, Col } from "react-bootstrap"

export const AllUsers = () => {
    const [usersProfile, setUsersProfile] = useState ([])

    useEffect (() => {
        if (usersProfile.length === 0) {

            getAllUsers(usersProfile)
                .then((resultado) => {
                    setUsersProfile(resultado.data.data)
                    // console.log(resultado.data.data);

                })
                .catch((error) => console.log(error))
        }
    }, [])

    return (

        <Container>
            <Row>
                <Col>
                <div className="allUsersDesign">
            <div className="tittle">pacientes</div>
                {getAllUsers.length > 0 
                    ? (
                        usersProfile.map((profile) => {
                            return (
                                <div className="getAllUsers">
                                    <div className="nameUsers">Nombre y apellido</div>
                                    <div className="nameGetAllUsers">{profile.name}</div>
                                    <div className="nameUsers">Email</div>
                                    <div className="emailGetAllUsers">{profile.email}</div>
                                </div>
                            )
                        })
                    )
                    : (
                        <div className="loading">Cargando...</div>
                    )
                }
                </div>
                
                </Col>
            </Row>
        </Container>

    )
}