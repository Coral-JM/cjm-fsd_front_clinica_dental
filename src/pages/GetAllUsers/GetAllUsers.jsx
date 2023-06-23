import React, { useEffect, useState }  from "react";
import './GetAllUsers.css';
import { getAllUsers } from "../../services/apiCalls";

export const AllUsers = () => {
    const [usersProfile, setUsersProfile] = useState ([])

    useEffect (() => {
        if (usersProfile.length === 0) {

            getAllUsers(usersProfile)
                .then((resultado) => {
                    setUsersProfile(resultado.data.data)
                    console.log(resultado.data.data);

                })
                .catch((error) => console.log(error))
        }
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col">soy get all users
                {getAllUsers.length > 0 
                    ? (
                        usersProfile.map((profile) => {
                            return (
                                <div>{profile.name}</div>
                            )
                        })
                    )
                    : (
                        <div>Cargando...</div>
                    )
                }
                </div>
            </div>
        </div>
    )
}