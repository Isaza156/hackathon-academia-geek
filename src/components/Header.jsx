import React, { Component } from "react";
import './style/HeaderStyle.css';
import Logo from './images/Logo AG.png';

class Header extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light text-dark text-uppercase">
        <div className="container">
          <a className="m-0 p-0 w-25" href="/"><img src={Logo} alt="" className="w-50 logo-home"/>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExample07"
            aria-controls="navbarsExample07"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample07">
            <ul className="navbar-nav mr-auto ">
              <li className="nav-item active">
                <a className="nav-link text-dark" href="/">
                  inicio <span class="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#aboutme">
                  sobre nosotros
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-dark"
                  href="/"
                  id="dropdown07"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  cursos
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdown07">
                  <a className="dropdown-item" href="#frontend">
                    front-end
                  </a>
                  <a className="dropdown-item" href="#backend">
                    backend
                  </a>
                  <a className="dropdown-item" href="#videojuegos">
                    video juegos
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#requisitos">
                  requisitos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" target="_blanck" href="http://nodoka.co">
                  Nodo Ká
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" target="_blanck" href="https://www.tecnologiaparaelsectorsocial.org">
                  Donaciones de Software
                </a>
              </li>
            </ul>
          </div>
          </div>
      </nav>
      <div className="bg-color-home">
        <div className="position-relative overflow-hidden p-3 p-md-5 bg-home text-white">
          <div className="col-md-5 p-lg-5 my-5 bg-color-home">
            <h1 className="display-4 font-weight-normal title-home">
              Makaia en PRO del Progreso Tecnológico
            </h1>
            <p className="lead font-weight-normal" />
            <a
              className="btn btn-primary btn-lg btn-block bg-boton font-weight-bold mb-2 boton-letter mt-4"
              href="https://wa.me/0573232933565"
            >
              Inscríbete en los cursos disponibles
            </a><br/>
            {/* <a
              className="btn btn-primary btn-lg bg-boton font-weight-bold boton-letter py-1"
              href="https://wa.me/0573232933565"
            >
              Contáctanos
            </a> */}
          </div>
        </div>
      </div>
    </React.Fragment>
    );
  }
}

export default Header;