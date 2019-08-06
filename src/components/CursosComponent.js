import React from 'react';
import './style/CursoStyle.css'
import { directive } from '@babel/types';

class Cursos extends React.Component{
    render(){
        return(
            <div>
                    
<div class="container">
    <div class="row mb-5">
        <div class="col-md-5 ">

       
            <div id="carouselExampleControls" class="carousel slide mb-4" data-ride="carousel" >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="https://hackernoon.com/hn-images/1*z-wBmvnov1dnLs7iU9tHzA.png" class="d-block carrusel_cursos" alt="..."/>
                  </div>
                  <div class="carousel-item">
                    <img src="https://scontent.feoh1-1.fna.fbcdn.net/v/t1.0-9/67445524_2411713828888063_1259339983769042944_n.jpg?_nc_cat=104&_nc_oc=AQnAM3H1IWmA6Ym-DWQPLW61ZiiaJyoUDmYwA3ZNwV63ITTWdY0bh3cHqGbOPwWpnK4&_nc_ht=scontent.feoh1-1.fna&oh=385b9134a158545b65605581461f15d2&oe=5DD385BE" class="d-block carrusel_cursos " alt="..."/>
                  </div>
                  <div class="carousel-item">
                    <img src="https://scontent.feoh1-1.fna.fbcdn.net/v/t1.0-9/62331903_2332012473524866_1815658138318143488_n.jpg?_nc_cat=111&_nc_oc=AQkmoAOfC_HKUpDQG72X4I8V9Zh1WLqRffkLVHF7dZoScbuhIlDlR9oZ7eMPAMeIYfs&_nc_ht=scontent.feoh1-1.fna&oh=2f88904eb59d1d9856e9f15618017068&oe=5DDE7A7D" class="d-block carrusel_cursos " alt="..."/>
                  </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>    

     

        </div>

        <div class="col-md-7">
            <h1 class="text-center letra mb-3">Línea 1: Desarrollo Web/Mobile Frontend</h1>
            <p class="contenidos text-center mb-4">En este curso se formarán las competencias para realizar el maquetado de interfaces gráficas para aplicaciones web utilizando HTML-CSS, bootstrap, material design, haciendo énfasis en Javascript para lo que se utilizará la herramienta de ReactJS. Así mismo se realizará el desarrollo de interfaces gráficas para dispositivos móviles utilizando ReactNative. Lo anterior se complementará con herramientas de testing.</p>
            <div class="row">
                <div class="col-3 ">
                  <img src="https://5.imimg.com/data5/TI/NN/GLADMIN-54744791/html-and-html5-500x500.png" class="imagenservicio mx-auto"/>
                </div>
             
                <div class="col-3">
                    <img src="https://i0.wp.com/ceef.net/wp-content/uploads/2016/03/css-logo.png?fit=500%2C500 " class="imagenservicio mx-auto"/>
                  </div>
             
                  <div class="col-3">
                    <img src="https://techtatva.co/techtatva140717/wp-content/uploads/2018/09/js-logo.png" class="imagenservicio mx-auto"/>
                  </div>
          
                  <div class="col-3">
                    <img src="https://miro.medium.com/max/1000/1*cPh7ujRIfcHAy4kW2ADGOw.png" class="imagenservicio mx-auto"/>
                  </div>
       
          
             </div>
        </div>
    </div>
    <div class="row mb-5">
        <div class="col-md-5 ">

        
            <div id="backend" class="carousel slide mb-4 " data-ride="carousel" >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="https://tubikstudio.com/wp-content/uploads/2016/10/code-1.png" class="d-block carrusel_cursos " alt="..."/>
                  </div>
                  <div class="carousel-item">
                    <img src="https://scontent.feoh1-1.fna.fbcdn.net/v/t1.0-9/64503632_2332012750191505_2015596979140165632_n.jpg?_nc_cat=110&_nc_oc=AQlefygNP_lqjGQA6WICk49DDy_xwG4W_utzSuRHO26FqP2pEkVz7XT0fSJG1TMNHxw&_nc_ht=scontent.feoh1-1.fna&oh=39677c476248298f5f5c5f2ce266cf9f&oe=5DCFEC21" class="d-block carrusel_cursos " alt="..."/>
                  </div>
                  <div class="carousel-item">
                    <img src="https://scontent.feoh1-1.fna.fbcdn.net/v/t1.0-9/67795716_2422381214487991_2036935274314858496_n.jpg?_nc_cat=110&_nc_oc=AQmfesN7P7cZP0wbMQ7Jj-fRd9bwE2CBHGahhT4dbticNM4ZsFyM1w893QC5-7kbpE8&_nc_ht=scontent.feoh1-1.fna&oh=45b0371f3a96c5345fca0c1c2639ff92&oe=5DD383A0" class="d-block carrusel_cursos " alt="..."/>
                  </div>
                </div>
                <a class="carousel-control-prev" href="#backend" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#backend" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>    

          

        </div>

        <div class="col-md-7">
            <h1 class="text-center letra mb-3">Línea 2: Desarrollo Web Backend con orientación Javascript</h1>
            <p class="contenidos text-center mb-5">En este curso se formarán las competencias para programar funciones, procedimientos o aplicaciones que procesen información del lado del servidor, utilizando tecnologías como: NodeJS, MongoDB, GRAPHQL y Firebase.</p>
            <div class="row">
                <div class="col-3 ">
                  <img src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/256/full/nodejslogo.png" class="imagenservicio mx-auto"/>
                </div>
             
                <div class="col-3">
                    <img src="https://serverdensity-wpengine.netdna-ssl.com/wp-content/uploads/2014/09/monitor-mongodb.png" class="imagenservicio mx-auto"/>
                  </div>
             
                  <div class="col-3">
                    <img src="http://enntechnologies.in/assets/img/Courses/1555843640logo.png" class="imagenservicio mx-auto"/>
                  </div>
          
                  <div class="col-3">
                    <img src="https://github.com/SchneiderInfosystems/FB4D/wiki/logoFB4D.png" class="imagenservicio mx-auto"/>
                  </div>
       
          
             </div>
        </div>
    </div>

    <div class="row mb-5">
        <div class="col-md-5 ">

          
            <div id="realidad_virtual" class="carousel slide mb-3" data-ride="carousel" >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="https://i.blogs.es/09cbbb/realidad-virtual/1366_2000.jpg" class="d-block carrusel_cursos" alt="..."/>
                  </div>
                  <div class="carousel-item">
                    <img src="https://scontent.feoh1-1.fna.fbcdn.net/v/t1.0-9/67445524_2411713828888063_1259339983769042944_n.jpg?_nc_cat=104&_nc_oc=AQnAM3H1IWmA6Ym-DWQPLW61ZiiaJyoUDmYwA3ZNwV63ITTWdY0bh3cHqGbOPwWpnK4&_nc_ht=scontent.feoh1-1.fna&oh=385b9134a158545b65605581461f15d2&oe=5DD385BE" class="d-block carrusel_cursos " alt="..."/>
                  </div>
                  <div class="carousel-item">
                    <img src="https://scontent.feoh1-1.fna.fbcdn.net/v/t1.0-9/62331903_2332012473524866_1815658138318143488_n.jpg?_nc_cat=111&_nc_oc=AQkmoAOfC_HKUpDQG72X4I8V9Zh1WLqRffkLVHF7dZoScbuhIlDlR9oZ7eMPAMeIYfs&_nc_ht=scontent.feoh1-1.fna&oh=2f88904eb59d1d9856e9f15618017068&oe=5DDE7A7D" class="d-block carrusel_cursos " alt="..."/>
                  </div>
                </div>
                <a class="carousel-control-prev" href="#realidad_virtual" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#realidad_virtual" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>    

        

        </div>

        <div class="col-md-7">
            <h1 class="text-center letra mb-3">Línea 3: Mecánica de videojuego en Realidad virtual</h1>
            <p class="contenidos text-center mb-5">En este curso se formarán las competencias para el desarrollo de experiencias inmersivas para entornos de 3D, utilizando para esto la herramienta de Unity y programando para alguna de las tecnologías de visualización disponibles en el mercado como Samsung Gear VR, Oculus Go, Microsoft Mixed Reality, HTC Vive u Oculus Rift.</p>
            <div class="row">
                <div class="col-3 ">
                  <img src="https://www.stickpng.com/assets/images/58482b92cef1014c0b5e4a2d.png" class="imagenservicio mx-auto"/>
                </div>
             
                <div class="col-3">
                    <img src="https://camo.githubusercontent.com/0617f4657fef12e8d16db45b8d73def73144b09f/68747470733a2f2f646576656c6f7065722e6665646f726170726f6a6563742e6f72672f7374617469632f6c6f676f2f6373686172702e706e67 " class="imagenservicio mx-auto"/>
                  </div>
             
                  <div class="col-3">
                    <img src="https://www.amd.com/system/files/11340-oculus-logo-hero-vertical-447x362.png" class="imagenservicio mx-auto"/>
                  </div>

                  <div class="col-3">
                    <img src="https://techtatva.co/techtatva140717/wp-content/uploads/2018/09/js-logo.png" class="imagenservicio mx-auto"/>
                  </div>
        
       
          
             </div>
        </div>
    </div>
</div>
            </div>
        );
    }
}


export default Cursos;