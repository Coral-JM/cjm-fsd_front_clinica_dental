
import React, {useState, useEffect} from 'react';
import "./Home.css";
import imgHome from '../../img/modelImg.jpg';
// import { ProductCard } from '../../common/ProductCard/ProductCard';
 
export const Home = () => {
    return (
        <div className='homeDesign'>
            <div className="tittle">( m i n t )</div>
            <div className="content">
                <div className="tittleTwo">Reinventando</div>
                <div className="tittleTwo">la cultura de</div>
                <div className="tittleTwo">la salud bucal</div>

                <div className="subtittleHome">( m i n t ) es bienestar, belleza y cuidado.</div>
                <div className="subtittleHome">Un espacio donde cuidaremos de ti y de tu sonrisa.</div>  
                <img src={ imgHome } className='imgHome'/>
                <div className="pideCitaHome" onClick={()=>navigate("/pidecita")}>Reserva tu cita</div>
            </div>
        </div>
    )
}