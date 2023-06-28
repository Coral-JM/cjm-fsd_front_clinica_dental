import React from 'react';
import './InputText.css';

 
export const InputText = ({type, design, placeholder, name, state, onBlurFunction}) => {

    const inputHandler = ({ target }, state) => {
        let { name, value } = target;
        state((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };

     return (
         <>
            <input 
                type={type} 
                className={design}
                placeholder={placeholder}
                name={name}
                onChange={(e)=>inputHandler(e, state)}
                // onBlur={(e)=>onBlurFunction(e)}
            />
         </>
     )
}