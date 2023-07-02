import React from "react";
import './DoctorProfile.css'
import {Container, Row, Col} from "react-bootstrap"
import { logout } from "../../pages/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export const Doctora = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
      
    return (
        <Container>
            <Row className="doctoraDesign">
                <Col>
                <div className="profileTittle">( doctora )</div>
                <div onClick={()=>navigate("/updateProfile")} style= {{width:"24em"}}className="profileLines">Información del usuario</div>
                <div onClick={()=>navigate("/allappointments")} style= {{width:"24em"}}className="profileLines">Mis citas</div> 
                <div onClick={()=>{
                  dispatch(logout()); 
                  navigate("/home")
                  }} style= {{width:"24em"}}className="profileLines">Log out</div>
                </Col>
            </Row>
        </Container>
            
      );
  };