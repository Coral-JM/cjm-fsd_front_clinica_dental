
import React, {useState, useEffect} from 'react';
import { useSelector } from "react-redux";
import "./Home.css";
import { Container, Row, Col  } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import imgHome from '../../img/modelImg.jpg';
import { useNavigate } from 'react-router-dom';
import { userData } from "../../pages/userSlice";
 
export const Home = () => {
    const datos = useSelector(userData);
    const isLogged = datos?.credentials?.token
    const navigate = useNavigate();
  
    const handleReservationClick = () => {
      if (isLogged) {
        navigate('/createappointment');
      } else {
        navigate('/login');
      }
    };
    
    return (
        <Container>
            <Row className="homeDesign">
                <div className="tittle">( m i n t )</div>
                <Col className="cardOneHome">
                <Card style={{ width: "25em", background: "transparent", border: "transparent"}}>
                    <Card.Body className='cardHomeText'>
                    <Card.Title  style={{ fontSize:"3.5em"}} className='tittleTwo'>Reinventando la cultura de la salud bucal</Card.Title>
                    <Card.Text style={{ fontSize:"1em"}} className='subtittleHome'>
                    ( m i n t ) es bienestar, belleza y cuidado. Un espacio donde cuidaremos de ti y de tu sonrisa.
                    </Card.Text>
                    <div style={{ fontSize:"1em", background: "#15aabf", border: "transparent", fontFamily: "monospace", margin: "1em"}} className='citaButton'
                    onClick={handleReservationClick}>Reserva tu cita</div>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <div className="col d-flex justify-content-center">
                <Card style={{ width: "25em", background: "transparent", border: "transparent"}}>
                    <Card.Body>
                        <div>
                            <img src={ imgHome } className="imgHome"/>
                        </div>
                    </Card.Body>
                </Card>
                </div>
                </Col>
            </Row>
        </Container>
    )
}