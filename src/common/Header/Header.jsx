
import React, { useState } from 'react';
import "./Header.css";
import { useNavigate } from 'react-router-dom';
 
export const Header = () => {

     const [token, setToken] = useState("");

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
                        <div className="webLinks" onClick={()=>navigate("/home")}>( m i n t )</div>
                        <div className="webLinks" onClick={()=>navigate("/tratamientos")}>Tratamientos</div>
                        </div>
                        
                        <div className="submitLinks">
                        <div className="userForms" onClick={()=>navigate("/login")}>Login</div>
                        {/* Aquí faltará el div con el nombre del user */}
                        </div>
                    </div>
                )
                       
            }

         </div>
     )
}