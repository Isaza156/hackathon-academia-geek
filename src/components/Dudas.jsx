import React from 'react';
import './style/DudasStyles.css'

const Dudas = () => {
  return (
    <div className="accordion container" id="accordionExample">
      <div className="card ">
        <div className="card-header text-center colores" id="headingOne">
          <h2 className="mb-0">
            <button className="btn btn-link text-center text-color rayas" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              ¿Que beneficios tiene la beca?
        </button>
          </h2>
        </div>

        <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
          <div className="card-body">
            La beca incluye el proceso de formación de 8 semanas y un apoyo de alimentación, así:

<li>Cubre la totalidad del proceso de formación en habilidades técnicas y blandas, con tutores expertos en el tema y conferencistas de las empresas aliadas. </li>
            <li>Materiales de formación. </li>
            <li>Apoyo en el proceso de empleabildad.</li>
            <li>Refrigerio todos los días durante el proceso de formación.</li>
            <li>La beca NO cubre gastos de transporte al lugar donde se realizarán los cursos, que en este caso será el Politécnico Jaime Isaza Cadavid (cercano a la estación Poblado del Metro de Medellín). </li>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header text-center colores" id="headingTwo">
          <h2 className="mb-0">
            <button className="btn btn-link collapsed text-color" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              ¿Cuál es el horario de estos cursos?
        </button>
          </h2>
        </div>
        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
          <div className="card-body">
            Generalmente la formación se realiza en las mañanas. El horario exacto está por definir pero la intensidad horaria de la sesión es de 5 horas diarias por 8 semanas.
      </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header text-center colores " id="headingThree">
          <h2 className="mb-0">
            <button className="btn btn-link collapsed text-color" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Si me equivoqué al enviar documentos ¿Cómo la corrijo?
        </button>
          </h2>
        </div>
        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
          <div className="card-body">
            Envíanos un correo explicando la situación y anexando el documento a: narayana.salamanca@makaia.org
      </div>
        </div>
      </div>

    </div>
  );
}

export default Dudas;