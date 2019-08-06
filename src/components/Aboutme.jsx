import React, { Component } from "react";
import './style/AboutmeStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style/AboutmeStyle.css';

class AboutMe extends Component {
  state = {};
  render() {
    return (
      <div className="container text-center mt-5 mb-5">
          <h1 className="mb-5" >Bienvenido a Academia Geek !!</h1>
        <div className="row">
          <div className="col-md-4 col-lg-4">
            <FontAwesomeIcon icon="question" size="7x" className="p-2" color="orange"/>
            <h3>¿Quiénes somos?</h3>
            <p>Somos una alianza entre MAKAIA, Agile Innova y E-volution: tres organizaciones que trabajan con tecnología, innovación y soluciones digitales que han decidido compartir conocimiento a través de una Academia de Código y Programación.</p>
          </div>
          <div className="col-md-4 col-lg-4 shadow">
          <FontAwesomeIcon icon="tools" size="7x" className="p-2" color="orange"/>
            <h3>¿Qué hacemos?</h3>
            <p>Te ayudamos a que en 8 semanas logres adquirir y practicar competencias de desarrollo junior de aplicaciones web, preparándote así para comenzar tu camino en el emprendimiento tecnológico o trabajar con alguno de nuestros aliados.</p>
          </div>
          <div className="col-md-4 col-lg-4">
          <FontAwesomeIcon icon="chalkboard-teacher" size="7x" className="p-2" color="orange"/>
            <h3>¿Qué aprendéras?</h3>
            <p>Además de programar, fortalecerás otras competencias y trabajarás con metodologías ágiles de desarrollo de software y emprendimiento TIC. Además te apoyaremos en la búsqueda de empleo y relacionamiento con empresas.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;