import React from "react";
import "./tratamientos.css";
import Card from 'react-bootstrap/Card';
import limpieza from '../../img/limpieza.jpg'
import caries from '../../img/caries.jpg'
import invisalign from '../../img/invisalign.jpg'



export const Tratamientos = () => {
  return (
    <div className="container">
      <div className="row treatmentsCards">
      <div className="tittle">( m i n t )</div>
        <div className="col">
        <Card style={{ width: "20em", background: "transparent", border: "transparent"}}>
          <div className="treatmentImg">
            <img src={limpieza} style={{ height: "20em", borderRadius: "1em"}}/>
          </div>
          <Card.Body className="cardTreatmentDesign">
            <Card.Title style={{fontWeight: "bold"}}>Exámen y limpieza dental</Card.Title>
            <Card.Text >
            Realizamos un diagnóstico dental completo. Con la tecnología más innovadora eliminamos la placa, 
            el sarro y las manchas superficiales de los dientes dejando una sonrisa sana y perfecta.
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
        <div className="col">
        <Card style={{ width: "20em", background: "transparent", border: "transparent"}}>
          <div className="treatmentImg">
            <img src={caries} style={{ height: "20em", borderRadius: "1em"}}/>
          </div>
          <Card.Body  className="cardTreatmentDesign">
            <Card.Title style={{fontWeight: "bold"}}>Restauración dental</Card.Title>
            <Card.Text>
            Puede incluir empastes dentales para tratar las caries, coronas dentales para proteger y fortalecer 
            los dientes debilitados, y puentes dentales o implantes dentales para reemplazar algunas piezas dentales.
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
        <div className="col">
        <Card style={{ width: "20em", background: "transparent", border: "transparent"}}>
          <div className="treatmentImg">
            <img src={invisalign} style={{ height: "20em", borderRadius: "1em"}}/>
          </div>
          <Card.Body className="cardTreatmentDesign">
            <Card.Title style={{fontWeight: "bold"}}>Ortodoncia o invisalign</Card.Title>
            <Card.Text>
            Pretendemos mejorar la alineación de los dientes y mejorar la mordida con una ortodoncia poco invasiva y cómoda. 
            Siempre poniéndo en el centro tus preferencias y tu estilo de vida. 
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
      </div>
    </div>
  );
};
