import React, { useEffect, useState } from "react";
import './GetAllUsers.css';
import { GetAllUsers } from "../../services/apiCalls";

export const AllUsers = () => {
    const [usersProfile, setUsersProfile] = useState ([])

    useEffect (() => {
        if (usersProfile.length === 0) {

            getAllUsers(usersProfile)
                .then((resultado) => {
                    
                })
                .catch()
        }
    })
}