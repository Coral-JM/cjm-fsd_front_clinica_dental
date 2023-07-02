import React from "react";
import './AdminProfile.css'
import {Container, Row, Col} from "react-bootstrap"
import { logout } from "../../pages/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export const Admin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
      
    return (
        <Container>
            <Row className="adminDesign">
                <Col>
                <div className="profileTittle">( admin )</div>
                <div onClick={()=>navigate("/updateProfile")} style= {{width:"24em"}}className="profileLines">Información del usuario</div>
                <div onClick={()=>navigate("/allusers")} style= {{width:"24em"}}className="profileLines">Usuarios de la clínica</div> 
                <div onClick={()=>{
                  dispatch(logout()); 
                  navigate("/home")
                  }} style= {{width:"24em"}}className="profileLines">Log out</div>
                </Col>
            </Row>
        </Container>
            
      );
  };