
import axios from 'axios';

const root = "http://localhost:5000";

export const loginMe = async (credentials) => {

    //Esto es un ejemplo de como enviamos un body por axios en un protocolo POST
    return await axios.post(`${root}/login`, credentials);


}