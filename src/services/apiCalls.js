
import axios from 'axios';

const root = "/localhost:/5000"

export const bringProducts = async () => {

    return await axios.post(`http://localhost:5000/login`);
};

export const loginMe = async (credentials) => {

    //Esto es un ejemplo de como enviamos un body por axios en un protocolo POST
    return await axios.post(`urldelbackendqueseencargadellogin`, credentials);


}