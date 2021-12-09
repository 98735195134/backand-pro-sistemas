import React, { useState } from "react";

import "./style.css"

export default function NovoCliente(){

    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [cpf, setCpf] = useState("")
    const [sexo, setSexo] = useState("")

    return(
        <div className="novo-cliente-conteiner">
            <section className="titulo-cadastro-cliente">
             <h1>Cadastro de Cliente</h1>
            </section>
            <section className="cliente-form">
                <form action= "">

         <label>
             Nome:
           <input
             value= {nome}
             onChange= {e => setNome(e.target.value)}
             />
             </label>

        <label>
          Sobrenome:
            <input
             value= {sobrenome}
             onChange= {e => setSobrenome(e.target.value)}
             />
             </label>

         <label htmlfor= "cpf">
             CPF:
            <input
             nome="cpf"
             value= {cpf}
             onChange= {e => setCpf(e.target.value)}
             />
             </label>

         <label>
           Sexo:
           <input
             value= {sexo}
             onChange= {e => setSexo(e.target.value)}
             />
             </label>

                </form>
            </section>
        </div>
    )
}