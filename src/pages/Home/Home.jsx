
import React, {useState, useEffect} from 'react';
import "./Home.css";
import Card from 'react-bootstrap/Card';
import imgHome from '../../img/modelImg.jpg';
import { useNavigate } from 'react-router-dom';
 
export const Home = () => {

    const navigate = useNavigate();
    
    return (
        <div className='container'>
            <div className="homeDesign row">
                <div className="tittle">( m i n t )</div>
                <div className="col d-flex justify-content-center cardOneHome">
                <Card style={{ width: "25em", background: "transparent", border: "transparent"}}>
                    <Card.Body className='cardHomeText'>
                    <Card.Title  style={{ fontSize:"3.5em"}} className='tittleTwo'>Reinventando la cultura de la salud bucal</Card.Title>
                    <Card.Text style={{ fontSize:"1em"}} className='subtittleHome'>
                    ( m i n t ) es bienestar, belleza y cuidado. Un espacio donde cuidaremos de ti y de tu sonrisa.
                    </Card.Text>
                    <div style={{ fontSize:"1em", background: "#15aabf", border: "transparent", fontFamily: "monospace", margin: "1em"}} className='citaButton'
                    onClick={()=>navigate("/createappointment")}>Reserva tu cita</div>
                    </Card.Body>
                </Card>
                </div>
                <div className="col d-flex justify-content-center">
                <Card style={{ width: "25em", background: "transparent", border: "transparent"}}>
                    <Card.Body>
                        <div>
                            <img src={ imgHome } className="imgHome"/>
                        </div>
                    </Card.Body>
                </Card>
                </div>
            </div>
        </div>
    )
}