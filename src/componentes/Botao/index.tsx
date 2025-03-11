import React from "react";
import style from './Botao.module.scss';

// class Botao extends React.Component<{ texto: string }> {
class Botao extends React.Component<{ children: React.ReactNode }> {
    render() {
        return (
            // <button className="botao">
            <button className={style.botao}>
                {/* Botão */}
                {this.props.children}
            </button>
        )
    }
}

export default Botao;