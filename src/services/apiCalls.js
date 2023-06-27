
import axios from 'axios';

const root = "http://localhost:5000";

export const loginMe = async (body) => {
    let res = await axios.post(`${root}/login`, body);
    return res.data.token;
}

export const registerMe = async (user) => {
    return await axios.post(`${root}/register`, user);
}

export const getAllUsers = async (usersProfile) => {
    return await axios.get(`${root}/users/allusers`, usersProfile);
}

export const getAllAppointments  = async (appointments) => {
    return await axios.get(`${root}/appointments/doctor/allappointments`, appointments);
}

export const searchAppointment = async (criteria) => {
    return await axios.get(`${root}/appointments/doctor/allappointments/?name=${criteria}`);
}
export const bookAppointment = async (user) => {
    return await axios.post(`${root}/appointments/createappointments`, user)
  }