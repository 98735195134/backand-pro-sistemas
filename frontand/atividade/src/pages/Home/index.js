import React from "react";

import Logo from "../../assets/img/logo-marca.jpg";

import "./style.css"

export default function Home(){

    return(
        <div className="home-conteiner">
                <section className="titulo-app">
                <h1>Software de Gestão Comercial</h1>
                </section>
            <section className="logo-conteiner">
                <img src={Logo} alt="logomarca da loja"/>
                </section>   
        </div>
    )
}

