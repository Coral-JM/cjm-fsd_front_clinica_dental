import React from "react";
import './AppointmentsAsUser.css'

export const AppointmentsAsUser = () => {
    return (
        <div className="container">
            <div className="row appointmentsUserBody">
                <div className="col appointmentsTittle">mis citas</div>

                <div style= {{width:"24em"}}className="appointmentsLines">Fecha y hora</div>
                <div style= {{width:"24em"}}className="appointmentsApi">0000/00/00 00:00</div>
                {/* Este último div deberá ser un input text con los datos de la cita que aparezcan 
                por defecto según el usuario y tendrá que tener habilitada la opción de modificación y eliminación*/}

                <div style= {{width:"24em"}}className="appointmentsLines">Tratamiento</div>
                <div style= {{width:"24em"}}className="appointmentsApi">Exámen y limpieza bucal</div>
                {/* Este último div deberá ser un input text con los datos de la cita que aparezcan 
                por defecto según el usuario y tendrá que tener habilitada la opción de modificación y eliminación*/}

                <div style= {{width:"10em"}}className="modificarCita">Modificar cita</div>
                <div style= {{width:"10em"}}className="eliminarCita">Eliminar cita</div>
            </div>
            
        </div>
    );
};