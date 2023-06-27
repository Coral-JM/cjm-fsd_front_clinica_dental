import React from "react";
import { useNavigate } from "react-router-dom";
import {Container, Row, Col} from "react-bootstrap"
import "./Profile.css";
import { logout } from "../../pages/userSlice";
import { useDispatch } from "react-redux";



export const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
    
    return (
        <Container>
            <Row className="profileBody">
                <Col>
                <div className="profileTittle">( perfil de usuario )</div>
                <div onClick={()=>navigate("/UpdateUser")} style= {{width:"24em"}}className="profileLines">Información del usuario</div>
                <div onClick={()=>navigate("/appointmentsasuser")} style= {{width:"24em"}}className="profileLines">Mis citas</div> 
                <div onClick={()=>{
                  dispatch(logout()); 
                  navigate("/home")
                  }} style= {{width:"24em"}}className="profileLines">Log out</div>
                </Col>
            </Row>
        </Container>
    );
};
