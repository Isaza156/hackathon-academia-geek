import React from 'react';
import AboutMe from './components/Aboutme';
import Requisitos from './components/RequisitosComponent';
import Footer from './components/Footer';
import Cursos from './components/CursosComponent';
import Header from './components/Header';


function App() {
  return (
    <React.Fragment>
      <Header />      
      <AboutMe />
      <hr />
      <Cursos />
      <hr />
      <Requisitos />
      <hr />
      <Footer />
    </React.Fragment>
  );
}
export default App;
