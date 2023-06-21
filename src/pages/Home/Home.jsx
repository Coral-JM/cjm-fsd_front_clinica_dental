
import React, {useState, useEffect} from 'react';
import "./Home.css";
import imgHome from '../../img/modelImg.jpg';
 
export const Home = () => {
    return (
        <div className='container'>
            <div className="homeDesign row">
                <div className="tittle">( m i n t )</div>
                <div className="textHome col-6">
                <div className="tittleTwo">Reinventando</div>
                <div className="tittleTwo">la cultura de</div>
                <div className="tittleTwo">la salud bucal</div>
                <div className="subtittleHome">( m i n t ) es bienestar, belleza y cuidado.</div>
                <div className="subtittleHome">Un espacio donde cuidaremos de ti y de tu sonrisa.</div>  
                <div className="pideCitaHome col-3 " onClick={()=>navigate("/pidecita")}>Reserva tu cita</div>
                </div>
                <div className="col-6 imgHome">
                <img src={ imgHome } className="imgHome"/>
                </div>
            </div>
        </div>
    )
}