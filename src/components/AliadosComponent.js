import React from 'react';
import './AliadosStyle.css';
class Aliados extends React.Component{
    render(){
        return(
           <section class="aliados">

               <div class="container">

                <h1 class="text-center">Nuestros aliados</h1>
                <p class="text-center">Nuestros aliados son empresas dispuestas a apoyarte o incluso a contratarte luego de que termines tu formación, si demuestras que lo mereces:</p>
                
                <div class="row justify-content-center aling-items-center">
                    <div class="col-md-2 aliados">
                        <img src="https://makaia.org/wp-content/uploads/2017/05/logo_web.png" class="organizar"/>
                    </div>
                    <div class="col-md-2 aliados">
                        <img src="https://agileinnova.files.wordpress.com/2017/04/cropped-logo-agile.png"/> 
                    </div>
                    <div class="col-md-2 aliados">
                         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/1280px-Accenture.svg.png" class="organizar"/>
                    </div>
                    <div class="col-md-2 aliados">
                        <img src="https://www.vectorlogo.es/wp-content/uploads/2018/05/logo-vector-celsia-vertical.jpg"/> 
                    </div>
                    <div class="col-md-2 aliados">
                         <img src="http://www.redttu.edu.co/es/wp-content/uploads/2016/01/jaime_isaza_cadavid.png"/>
                    </div>
                    <div class="col-md-2 aliados">
                    <img src="https://makaia.org/wp-content/uploads/2017/05/logo_web.png" class="organizar"/>
                    </div>
                </div>
               </div>

           </section>
        );
    }
}

export default Aliados;