import React, { useState } from 'react';
// import Botao from './componentes/Botao';
import Formulario from '../componentes/Formulario';
import Lista from '../componentes/Lista';
import style from './App.module.scss';
import Cronometro from '../componentes/Cronometro';
import { ITarefa } from '../types/tarefa';
// import logo from './logo.svg';
// import './App.css';

function App() {
 const [tarefas, setTarefas] = useState<ITarefa[] | []>([])
    //     tarefa: 'React',
    //     tempo: '02:00:00'
    //     }, {
    //         tarefa: 'JavaScript',
    //         tempo: '01:00:00'
    //     }, {
    //         tarefa: 'TypeScript',
    //         tempo: '03:00:00'
    //     }
    // ]);
  return (
    // <div className="AppStyle">
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas} />
      <Cronometro />
    </div>
  );
}

export default App;
