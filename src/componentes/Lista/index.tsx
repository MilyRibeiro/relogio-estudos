// import React, { useState } from "react";
import style from './Lista.module.scss';
import Item from "./Item";
import { ITarefa } from '../../types/tarefa';

// interface ITarefa {
//     tarefa: string,
//     tempo: string
// };

function Lista({ tarefas }: { tarefas: ITarefa[] }) {
    // const tarefas = [{
    // let tarefas = 
    // const [tarefas, setTarefas] = useState([{
    //     tarefa: 'React',
    //     tempo: '02:00:00'
    //     }, {
    //         tarefa: 'JavaScript',
    //         tempo: '01:00:00'
    //     }, {
    //         tarefa: 'TypeScript',
    //         tempo: '03:00:00'
    //     }
    // ]);  --> foi para o App.tsx

    return (
        <aside className={style.listaTarefas}>
            {/* <h2 onClick={() => {
                // console.log("h2 clicado: ", tarefas);
                setTarefas([...tarefas, { tarefa: "Estudar estado", tempo: "05:00:00"}]);
            }}>  */}
            <h2>Estudos do dia </h2>
            <ul>
                {/* Cria de forma dinâmica um novo item ou li na lista */}
                {tarefas.map((item, index) => (
                   <Item 
                        key={index}
                        {...item}
                        // ou tarefa={item.tarefa} 
                        // tempo={item.tempo}
                   />
                ))}
            </ul>
        </aside>
    )    
}

export default Lista;