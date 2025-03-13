import React from "react";
import style from './Botao.module.scss';

interface Props {
    type?: "button" | "submit" | "reset" | undefined, 
    onClick?: () => void,
    children: React.ReactNode
}

function Botao({ onClick, type, children }: Props) {
    return (
        <button 
            onClick={onClick} 
            type={type} 
            className={style.botao}>{children}
        </button>
    )
}

// class Botao extends React.Component<{ texto: string }> {
// class Botao1 extends React.Component<{ 
//     children: React.ReactNode, 
//     type?: "button" | "submit" | "reset" | undefined, 
//     onClick?: () => void 
// }> {
//     render() {
//         const { type = "button", onClick } = this.props;
//         return (
//             // <button className="botao">
//             <button onClick={onClick} type={type} className={style.botao}>
//                 {/* Botão */}
//                 {this.props.children}
//             </button>
//         )
//     }
// }  --> refatoramos em um function component

export default Botao;