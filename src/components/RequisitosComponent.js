import React from 'react'
import './style/RequisitosStyle.css'

const Requisitos = () => {
    return (
        <div className='container text-center my-5'>
        <div className='text-center mt-4 mb-4 text-danger'>
            <h3> Convocatoria para aplicar a una beca </h3>
        </div>
        <div className="accordion container" id="accordionExample">
            <div className="card ">
                <div className="card-header text-center" id="headingOne">
                    <h2 className="mb-0">
                        <button className="btn btn-link text-center" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Linea 1: Desarrollo Web FrontEnd
    </button>
                    </h2>
                </div>

                <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div className="card-body">

                        <p className='mt-3'><strong>Inicio de Convocatoria: 01 de Enero 2020</strong> </p>
                        <p><strong>Cierre de Convocatoria: 31 de Enero 2020</strong></p>
                        <p><strong>Inicio de Formación: 03 de Febrero 2020</strong></p>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header text-center" id="headingTwo">
                    <h2 className="mb-0">
                        <button className="btn btn-link collapsed " type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Linea 2: Desarrollo Web BackEnd
    </button>
                    </h2>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                    <div className="card-body">
                        <p className='mt-3'><strong>Inicio de Convocatoria: 01 de Enero 2020</strong> </p>
                        <p><strong>Cierre de Convocatoria: 31 de Enero 2020</strong></p>
                        <p><strong>Inicio de Formación: 03 de Febrero 2020</strong></p>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header text-center" id="headingThree">
                    <h2 className="mb-0">
                        <button className="btn btn-link collapsed " type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Linea 3: Mecánicas de Videojuegos
    </button>
                    </h2>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                    <div className="card-body">
                        <p className='mt-3'><strong>Inicio de Convocatoria: 01 de Enero 2020</strong> </p>
                        <p><strong>Cierre de Convocatoria: 31 de Enero 2020</strong></p>
                        <p><strong>Inicio de Formación: 03 de Febrero 2020</strong></p>
                    </div>
                </div>
            </div>

        </div>
        <h3 className='text-danger ml-4 mt-5'> Requisitos para aplicar a una beca </h3>
        <div className='row'>
            <div className='text-center my-5 col-md-6 col-lg-6'>                
                <ul>
                    <div className="card border">

                        <div className="card-body">
                            <p>Bachiller de Institucion Pública</p>
                            <p>Contar con mínimo 5 horas diarias</p>
                            <p>Disponer de 8 semanas para la formación</p>
                            <p>Completar el formulario en linea</p>
                        </div>
                    </div>
                </ul>
            </div>
            <div className='col-md-6 col-lg-6 mt-5'>
                <div className='text-center'>
                    <h2 className='text-dark'> ¿Cumples con los requisitos?</h2>
                    <button type="button" class="btn btn btn-danger my-3">Aplica para una beca</button>
                    <h5 className='text-dark'> ¿No Cumples con los requisitos?</h5>
                    <button type="button" class="btn btn-danger my-3">Solicita tu cupo</button>

                </div>
            </div>
        </div>
        <div className='text-secondary'>
            <p>*Entrarás a un proceso de evaluación donde podrán ser requeridos documentos adicionales.</p>
            <p>**Asumirás un compromiso para cumplir este requisito.</p>
        </div>
    </div>

    )
}
export default Requisitos;