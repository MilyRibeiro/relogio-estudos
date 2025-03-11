import React from 'react';
// import Botao from './componentes/Botao';
import Formulario from '../componentes/Formulario';
import Lista from '../componentes/Lista';
import style from './App.module.scss';
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    // <div className="AppStyle">
    <div className={style.AppStyle}>
      <Formulario />
      <Lista />
    </div>
  );
}

export default App;
