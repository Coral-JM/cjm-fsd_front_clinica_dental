
import React, { useState } from 'react';
import "./Header.css";

import { useNavigate } from 'react-router-dom';
 
export const Header = () => {

     const [token, setToken] = useState("");

     //Instancio navigate para poder moverme entre la SPA
     const navigate = useNavigate();

     return (
         <div className='headerDesign'>

            {token !== "" 

                ? (
                    <div>aqui mostraríamos opciones de logeado....</div>
                )

                : (

                    <div className="navbarLinks">
                        <div className="navLinks">
                        <div className="webLinks" onClick={()=>navigate("/home")}>HOME</div>
                        <div className="webLinks" onClick={()=>navigate("/tratamientos")}>Tratamientos</div>
                        <div className="webLinks" onClick={()=>navigate("/pidecita")}>pide tu cita</div>
                        </div>
                        
                        <div className="submitLinks">
                        <div className="userForms" onClick={()=>navigate("/login")}>Login</div>
                        <div className="userForms" onClick={()=>navigate("/register")}>Register</div>
                        </div>
                    </div>
                )
                       
            }

         </div>
     )
}