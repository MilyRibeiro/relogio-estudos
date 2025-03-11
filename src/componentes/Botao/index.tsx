import React from "react";
import style from './Botao.module.scss';

// class Botao extends React.Component<{ texto: string }> {
class Botao extends React.Component<{ children: React.ReactNode, type?: "button" | "submit" | "reset" | undefined }> {
    render() {
        const { type = "button" } = this.props;
        return (
            // <button className="botao">
            <button type={type} className={style.botao}>
                {/* Botão */}
                {this.props.children}
            </button>
        )
    }
}

export default Botao;