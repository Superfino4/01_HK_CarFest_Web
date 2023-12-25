// src/App.js

import React from 'react';
import CarList from './components/CarList';
import SlideLop from './slider.jsx';
import BotonesSlideLop from './components/botonesSlider.jsx';
import './App.css';
import logo from './lop.png';


function App() {


  return (
    <div className="App">
      {/* Barra de Búsqueda */}
      <div className="search-bar">
        <input type="text" placeholder="Buscar..." />
        <button>Buscar</button>
      </div>
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
          </div>
          <h1>HK CarFest 2024</h1>
          <div className="container-der">
            <div className="header-buttons">
              <button className="login-button">Iniciar Sesión</button>
              <button className="register-button">Registro</button>
            </div>
          </div>
        </div>

        {/* <!-- FONT AWESOM CDN --> */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />

      </header>

      <div className="menu-container">
        <div className="menu">
          <a href="/">Inicio</a>
          <a href="/Caregorias">Caregorias</a>
          <a href="/sobre-nosotros">Sobre Nosotros</a>
          <a href="/contacto">Contacto</a>
        </div>
      </div>

      {/* Main Content */}
      <main className='smaller-content'>
        <div className="main-container">
          <div className="main-left">
            <h2>EVENTOS PARA EL 2024</h2>

            <SlideLop />
            <BotonesSlideLop />

          </div>


          <div className="main-right">
            {/* Contenido de la segunda sección */}
            <h2>Sección Derecha</h2>
            {/* Agrega aquí el contenido que deseas en la segunda sección */}
          </div>
        </div>
        <CarList />
      </main>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 HK CarFest Web</p>
      </footer>
    </div>




  );
}


export default App;
