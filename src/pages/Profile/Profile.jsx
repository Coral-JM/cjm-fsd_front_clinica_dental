import React from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";
import { logout } from "../../pages/userSlice";



export const Profile = () => {
  const navigate = useNavigate();
    
    return (
        <div className="container">
            <div className="row profileBody">
                <div className="col profileTittle">( perfil de usuario )</div>

                <div onClick={()=>navigate("/UpdateUser")} style= {{width:"24em"}}className="profileLines">Información del usuario</div>
                <div onClick={()=>navigate("/appointmentsasuser")} style= {{width:"24em"}}className="profileLines">Mis citas</div> 
                <div onClick={()=>{dispatch(logout()); navigate("/home")}} style= {{width:"24em"}}className="profileLinesEnd">Log out</div>

            </div>
        </div>
    );
};
