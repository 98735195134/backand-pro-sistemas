import React, { useState } from "react";
import api from "../../../services/api";
import {FiArrowLeftCircle} from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import Barra from "../../../components/Barra";
import { TextInput } from "react-materialize";


import "./style.css"

import CarrinhoCompras from "../../../assets/img/logo-carrinho-de-compras.png";

export default function NovoCliente(){

    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [cpf, setCpf] = useState("")
    const [sexo, setSexo] = useState("")
    const [endereco, setEndereco] = useState("")
    const [cidade, setCidade] = useState("")
    const [uf, setUf] = useState("")
    const [email, setEmail] = useState("")
    const [celular, setCelular] = useState("")

    const navegação = useNavigate();
 
   async function executarCadastro(e){
    e.preventDefault();

     const dados = {
       nome,
       sobrenome,
       cpf,
       sexo,
       endereco,
       cidade,
       uf,
       email,
       celular
     }
      try{
        const response = await api.post("/cliente/cadastro", dados)
       alert(`Seja bem-vindo.Seu id de acesso é ${response.data}`)
       navegação("/")
      }catch (error) {
       alert("Erro ao tentar cadastrar.Tente novamente.")
      } 
    }

    return(
        <div className="novo-cliente-conteiner">
          <div className= "menu">
            <Barra/>
          </div>
          <div className= "content">
            <section className= "cliente-form">
              <section className="logo-carrinho-compras">
                <img src= {CarrinhoCompras} alt= "carrinho de compras" style={ { width: "100%" } }/>

                <Link to= "/"> 
                <FiArrowLeftCircle size= {30} color= "#e02041"/>
                </Link>
                </section>
                <section className= "form-cadastro-cliente">
                  <h1>Cadastro de Clientes</h1>
              <form onSubmit={executarCadastro}> 
             <TextInput
             icon= "person"
             id="TextInput-49"
             label= "Nome"
             value= {nome}
             onChange= {e => setNome(e.target.value)}
             />
            <TextInput
            icon= "person"
            id="TextInput-49"
            label= "Sobrenome"
             value= {sobrenome}
             onChange= {e => setSobrenome(e.target.value)}
             />
            <TextInput
            icon= "person"
            id="TextInput-49"
            label= "CPF"
             nome="cpf"
             value= {cpf}
             onChange= {e => setCpf(e.target.value)}
             />
           <TextInput
           icon= "person"
           id="TextInput-49"
           label= "Sexo"
           value= {sexo}
           onChange= {e => setSexo(e.target.value)}
             />
             <TextInput
             icon= "person"
             id="TextInput-49"
             label= "UF"
             value= {uf}
             onChange= {e => setUf(e.target.value)}
             />
               <TextInput
               icon= "person"
               id="TextInput-49"
              label= "Endereço"
             value= {endereco}
             onChange= {e => setEndereco(e.target.value)}
             /> 
              <TextInput
              icon="person"
              id="TextInput-49"
              label= "Cidade"
             value= {cidade}
             onChange= {e => setCidade(e.target.value)}
             /> 
             <TextInput
             icon= "person"
             id="TextInput-49"
             label= "Celular"
             value= {celular}
             onChange= {e => setCelular(e.target.value)}
             />
              <TextInput
              icon= "person"
              id="TextInput-49"
              label= "E-mail"
              value= {email}
              type= "Email"
              onChange= {e => setEmail(e.target.value)}
             />

       <button className="button" style={ { width: "95%" } }>
         Cadastrar
       </button>
              </form>
            </section>
           </section>
         </div>
      </div>
    )
}