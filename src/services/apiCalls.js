
import axios from 'axios';

const root = "http://localhost:5000";

export const loginMe = async (body) => {
    let res = await axios.post(`${root}/login`, body);
    return res.data.token;
}

export const registerMe = async (user) => {
    return await axios.post(`${root}/register`, user);
}

export const getProfile = async (token) => {
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  
    let res = await axios.get(`${root}/users/myuser/updateProfile`, config);
    // console.log(res)
    return res;
  };

export const updateProf = async (body, token) => {
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  // console.log(body);
  return await axios.put(`${root}/users/myuser/updateProfile`, body, config);
}


export const getAppointmentsUser  = async (token) => {
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

    let res = await axios.get(`${root}/appointments/appointmentsasuser`, config);
    return res;
}

export const updateAppointment = (appointmentId, newDate, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const data = {
    date: newDate,
  };

  return axios.put(`${root}/appointments/appointmentsasuser/${appointmentId}`, data, config);
};

export const getAllUsers = async (usersProfile) => {
    return await axios.get(`${root}/users/allusers`, usersProfile);
}

export const getAllAppointments  = async (appointments) => {
    return await axios.get(`${root}/appointments/doctor/allappointments`, appointments);
}

// export const searchAppointment = async (criteria) => {
//     return await axios.get(`${root}/appointments/doctor/allappointments/?name=${criteria.criteria}`);
// }


export const bookAppointment = async (body, token) => {
  let config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
  };
    // console.log(body);
    // console.log(token);
    let res =  await axios.post(`${root}/appointments/createappointment`, body, config)
    return res;
  }