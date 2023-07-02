
import React from 'react';

import {Route, Routes, Navigate} from 'react-router-dom';
import { Home } from '../Home/Home';
import { Login } from '../Login/Login';
import { Register } from '../Register/Register';
import { Tratamientos } from '../Tratamientos/Tratamientos';
import { Profile } from '../Profile/Profile';
import { UpdateProfile } from '../UpdateUser/UpdateUser';
import { AppointmentsAsUser } from '../AppointmentsAsUser/AppointmentsAsUser';
import { AllUsers } from '../GetAllUsers/GetAllUsers';
import { AllAppointments } from '../GetAllAppointments/GetAllAppointments';
import { CreateAppointment } from '../CreateAppointment/CreateAppointment';
import { Doctora } from '../DoctorProfile/DoctorProfile'
import { Admin } from '../AdminProfile/AdminProfile'


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
                <Route path="/updateProfile" element={<UpdateProfile />} />
                <Route path="/appointmentsasuser" element={<AppointmentsAsUser />}/>
                <Route path="/allusers" element={<AllUsers />}/>
                <Route path="/allappointments" element={<AllAppointments />}/>
                <Route path="/createappointment" element={<CreateAppointment />}/>
                <Route path="/doctora" element={<Doctora />}/>
                <Route path="/admin" element={<Admin />}/>
            </Routes>
        </>
     )
}