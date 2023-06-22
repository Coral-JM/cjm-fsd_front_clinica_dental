
import React from 'react';

import {Route, Routes, Navigate} from 'react-router-dom';
import { Home } from '../Home/Home';
import { Login } from '../Login/Login';
import { Register } from '../Register/Register';
import { Tratamientos } from '../Tratamientos/Tratamientos'
import { Profile } from '../Profile/Profile'
import { UpdateUser } from '../UpdateUser/UpdateUser'
import { AppointmentsAsUser } from '../AppointmentsAsUser/AppointmentsAsUser'
 
export const Body = () => {
     return (
        <>
            <Routes>
                <Route path="*" element={<Navigate to="/"/>}/>
                <Route path="/" element={<Home />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/register" element={<Register />}/>
                <Route path="/tratamientos" element={<Tratamientos />}/>
                <Route path="/profile" element={<Profile />}/>
                <Route path="/updateUser" element={<UpdateUser />}/>
                <Route path="/appointmentsasuser" element={<AppointmentsAsUser />}/>

            </Routes>
        </>
     )
}