import React from "react";
import './UpdateUser.css'

export const UpdateUser = () => {
    return (
        <div className="container">
            <div className="row userBody">
                <div className="col userTittle">nombre del usuario</div>

                <div style= {{width:"24em"}}className="userLines">Nombre y apellido</div>
                <div style= {{width:"24em"}}className="userApi">Adriana Bausach</div>

                <div style= {{width:"24em"}}className="userLines">Email</div> 
                <div style= {{width:"24em"}}className="userApi">adribau@gmail.com</div> 


                <div style= {{width:"24em"}}className="userLines">Password</div>
                <div style= {{width:"24em"}}className="userApi">***********</div>

                <div style= {{width:"15em"}}className="modificarDatos">Modificar datos</div>
                
            </div>
        </div>
    );
};