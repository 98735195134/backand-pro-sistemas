import React from "react";
import Logo from "../../assets/img/logo-marca-loja.jpg";
import Barra from "../../components/Barra";

import "./style.css"

export default function Home() {
    return(
        <div className="home-conteiner">
         <div className="menu">
          <Barra />
           </div>
                <section className="titulo-app">
                <h1>Software de Gestão Comercial</h1>
                </section>
            <section className="logo-conteiner">
                <img src={Logo} alt="logomarca da loja"/>
                </section>   
        </div>
    )
}

