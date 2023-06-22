import React from "react";
import './UserInfo.css'

export const UserInfo = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col userTittle"> Nombre del usuario
                
                <div onClick={()=>navigate("/userinfo")} style= {{width:"24em"}}className="profileLines">Información del usuario</div>
                <div onClick={()=>navigate("/appointments")} style= {{width:"24em"}}className="profileLines">Mis citas</div> 
                <div onClick={()=>navigate("/home")} style= {{width:"24em"}}className="profileLinesEnd">Log out</div>
                </div>
            </div>
        </div>
    );
};