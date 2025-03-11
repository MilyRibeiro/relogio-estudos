import React from "react";
import style from './Lista.module.scss';
import Item from "./Item";

function Lista() {
    const tarefas = [{
        tarefa: 'React',
        tempo: '02:00:00'
        }, {
            tarefa: 'JavaScript',
            tempo: '01:00:00'
        }, {
            tarefa: 'TypeScript',
            tempo: '03:00:00'
        }
    ];

    return (
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia </h2>
            <ul>
                {/* Cria de forma dinâmica um novo item ou li na lista */}
                {tarefas.map((item, index) => (
                   <Item 
                        key={index}
                        {...item}
                        // tarefa={item.tarefa} 
                        // tempo={item.tempo}
                   />
                ))}
            </ul>
        </aside>
    )    
}

export default Lista;