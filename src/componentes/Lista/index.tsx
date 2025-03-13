import style from './Lista.module.scss';
import Item from "./Item";
import { ITarefa } from '../../types/tarefa';

interface Props {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

function Lista({ tarefas, selecionaTarefa }: Props) {
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia </h2>
            <ul>
                {/* Cria de forma dinâmica um novo item ou li na lista */}
                {tarefas.map((item) => (
                   <Item 
                    selecionaTarefa={selecionaTarefa}
                        key={item.id}
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