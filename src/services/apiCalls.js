
import axios from 'axios';

const root = "http://localhost:5000";

export const loginMe = async (credentials) => {
    return await axios.post(`${root}/login`, credentials);
}

export const registerMe = async (credentials) => {
    return await axios.post(`${root}/register`, credentials);
}

export const getAllUsers = async (usersProfile) => {
    return await axios.get(`${root}/users/allusers`, usersProfile);
}

export const getAllAppointments  = async (appointments) => {
    return await axios.get(`${root}/appointments/doctor/allappointments`, appointments);
}