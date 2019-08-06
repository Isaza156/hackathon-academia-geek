import React from 'react';
import './style/AliadosStyle.css';
class Aliados extends React.Component{
    render(){
        return(
           <section className="aliados">

               <div className="container">

                <h1 className="text-center my-3">Nuestros aliados</h1>
                <p className="text-center">Nuestros aliados son empresas dispuestas a apoyarte o incluso a contratarte luego de que termines tu formación, si demuestras que lo mereces:</p>
                
                <div className="row justify-content-center aling-items-center">
                    <div className="col-md-2 aliados">
                        <img src="https://makaia.org/wp-content/uploads/2017/05/logo_web.png" className="organizar"/>
                    </div>
                    <div className="col-md-2 aliados">
                        <img src="https://agileinnova.files.wordpress.com/2017/04/cropped-logo-agile.png"/> 
                    </div>
                    <div className="col-md-2 aliados">
                         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/1280px-Accenture.svg.png" className="organizar"/>
                    </div>
                    <div className="col-md-2 aliados">
                        <img src="https://www.vectorlogo.es/wp-content/uploads/2018/05/logo-vector-celsia-vertical.jpg"/> 
                    </div>
                    <div className="col-md-2 aliados">
                         <img src="http://www.redttu.edu.co/es/wp-content/uploads/2016/01/jaime_isaza_cadavid.png"/>
                    </div>
                    <div className="col-md-2 aliados">
                    <img src="https://makaia.org/wp-content/uploads/2017/05/logo_web.png" className="organizar"/>
                    </div>
                </div>
               </div>

           </section>
        );
    }
}

export default Aliados;