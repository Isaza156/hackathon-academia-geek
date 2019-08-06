import React from 'react'
import './Style.css'

const Requisitos = () => {
    return (
        <div className='container text-center'>
        <div className='text-center mt-4 mb-4 text-primary'>
            <h3> Convocatoria para aplicar a una beca </h3>
        </div>
        <div className='row'>
            <div className='col-4 my-4'>
                <div className=''>
                    <h5 className='text-danger'>Linea 1: Desarrollo Web FrontEnd</h5>
                    <p className='mt-3'><strong>Inicio de Convocatoria: 01 de Enero 2020</strong> </p>
                    <p><strong>Cierre de Convocatoria: 31 de Enero 2020</strong></p>
                    <p><strong>Inicio de Formación: 03 de Febrero 2020</strong></p>
                </div>

            </div>
            <div className='col-4 my-4'>
                <div className=''>
                    <h5 className='text-danger'>Linea 2: Desarrollo Web BackEnd</h5>
                    <p className='mt-3'><strong>Inicio de Convocatoria: 01 de Enero 2020</strong> </p>
                    <p><strong>Cierre de Convocatoria: 31 de Enero 2020</strong></p>
                    <p><strong>Inicio de Formación: 03 de Febrero 2020</strong></p>
                </div>

            </div>
            <div className='col-4 my-4'>
                <div className=''>
                    <h5 className='text-danger'>Linea 3: Mecánicas de Videojuegos</h5>
                    <p className='mt-3'><strong>Inicio de Convocatoria: 01 de Enero 2020</strong></p>
                    <p><strong>Cierre de Convocatoria: 31 de Enero 2020</strong></p>
                    <p><strong>Inicio de Formación: 03 de Febrero 2020</strong></p>
                </div>

            </div>

        </div>
        <div className='row'>
            <div className='text-center my-3 col-6'>
                <h3 className='text-primary ml-4'> Requisitos para aplicar a una beca </h3>
                <ul className='my-4'>
                    <div className=''>
                        <li className='mt-3'><strong>Bachiller de Institucion Pública</strong></li>
                        <li className='mt-3'><strong>Contar con mínimo 5 horas diarias</strong></li>
                        <li className='mt-3'><strong>Disponer de 8 semanas para la formación</strong></li>
                        <li className='mt-3'><strong>Completar el formulario en linea</strong></li>
                        <li className='mt-3'></li>
                    </div>
                </ul>
            </div>
            <div className='col-6 mt-3'>
                <div className='text-center'>
                    <h3 className='text-primary'> ¿Cumples con los requisitos?</h3>
                    <button type="button" class="btn btn btn-danger my-3">Aplica para una beca</button>
                    <h3 className='text-primary'> ¿No Cumples con los requisitos?</h3>
                    <button type="button" class="btn btn-danger my-3">Solicita tu cupo (Precio completo)</button>

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
