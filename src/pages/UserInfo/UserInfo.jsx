import React from "react";
import './UserInfo.css'

export const UserInfo = () => {
    return (
        <div className="container">
            <div className="row userBody">
                <div className="col userTittle"> nombre del usuario</div>

                <div style= {{width:"24em"}}className="userLines">Nombre y apellido</div>
                <div style= {{width:"24em"}}className="userApi">Adriana Bausach</div>
                {/* Este último div deberá ser un input text con los datos del usuario que aparezcan por defecto según el usuario y tendrá que tener habilitada la opción de modificación */}

                <div style= {{width:"24em"}}className="userLines">Email</div> 
                <div style= {{width:"24em"}}className="userApi">adribau@gmail.com</div> 
                {/* Este último div deberá ser un input text con los datos del usuario que aparezcan por defecto según el usuario y tendrá que tener habilitada la opción de modificación */}


                <div style= {{width:"24em"}}className="userLines">Password</div>
                <div style= {{width:"24em"}}className="userApi">***********</div>
                {/* Este último div deberá ser un input text con los datos del usuario que aparezcan por defecto según el usuario y tendrá que tener habilitada la opción de modificación */}

                <div style= {{width:"15em"}}className="modificarDatos">Modificar datos</div>
                
            </div>
        </div>
    );
};