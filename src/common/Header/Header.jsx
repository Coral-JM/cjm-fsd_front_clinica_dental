import React, { useState } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { userData } from "../../pages/userSlice";

export const Header = () => {

  const navigate = useNavigate();
  const datos = useSelector(userData);
  const isLogged = datos?.credentials?.token
  const role = datos?.data?.role_id

  // console.log("Role ID:", role)

  return (
    <div className="headerDesign">
      <div className="navbarLinks">
        <div className="navLinks">
          <div className="webLinks" onClick={() => navigate("/home")}>
            ( m i n t )
          </div>
          <div className="webLinks" onClick={() => navigate("/tratamientos")}>
            Tratamientos
          </div>
        </div>
        <div className="submitLinks">

          {isLogged ? (
            <>
              {role === 1 && (
                <div
                  className="userForms"
                  onClick={() => navigate("/profile")}
                >
                  Perfil
                </div>
              )}
              {role === 2 && (
                <div
                  className="userForms"
                  onClick={() => navigate("/doctora")}
                >
                  Doctora
                </div>
              )}
              {role === 3 && (
                <div
                  className="userForms"
                  onClick={() => navigate("/admin")}
                >
                  Admin
                </div>
              )}
            </>
          ) : (
            <div
              className="userForms"
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </div>
          )}


        </div>
      </div>
    </div>
  );
};
