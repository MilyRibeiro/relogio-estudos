import React from "react";

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
        <aside>
            <h2> Estudos do dia </h2>
            <ul>
                {/* Cria de forma dinâmica um novo item ou li na lista */}
                {tarefas.map((item, index) => (
                    <li key={index}>
                        <h3>{item.tarefa}</h3>
                        <span>{item.tempo}</span>
                    </li>
                ))}
                {/* <li>
                    <h3>React</h3>
                    <span>02:00:00</span>
                </li>
                <li>
                    <h3>JavaScript</h3>
                    <span>01:00:00</span>
                </li> */}
            </ul>
        </aside>
    )    
}

export default Lista;