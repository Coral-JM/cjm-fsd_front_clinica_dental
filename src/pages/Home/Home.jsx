
import React, {useState, useEffect} from 'react';
import "./Home.css";
// import { bringProducts } from '../../services/apiCalls';
// import { ProductCard } from '../../common/ProductCard/ProductCard';
 
export const Home = () => {
    return (
        <div className='homeDesign'>
            <div className="tittle">( m i n t )</div>
            <div className="textOne">
                <div className="tittleTwo">Reinventando</div>
                <div className="tittleTwo">la cultura de</div>
                <div className="tittleTwo">la salud bucal</div>

                <div className="subtittle">( m i n t ) es bienestar, belleza y cuidado.</div>
                <div className="subtittle">Un espacio donde cuidaremos de ti y de tu sonrisa.</div>  
            </div>

        </div>
    )
}