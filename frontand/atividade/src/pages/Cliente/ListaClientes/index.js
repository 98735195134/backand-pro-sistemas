import React, {useEffect, useState} from "react";
import {FiTrash2, FiRotateCcw} from "react-icons/fi";
import {useNavigate} from "react-router-dom";
import Barra from "../../../components/Barra";

import "./style.css";

import api from "../../../services/api"

export default function ListaClientes(){

    const [clientes, setClientes] = useState([]);
    const navegação = useNavigate()

    useEffect(() => {
    api.get("/cliente/listar").then( response => {
        setClientes(response.data)
    })
    }, [])

   async function deletarCliente(id){
        try {
            await api.delete(`/cliente/apagar/${id}`)
            setClientes(clientes.filter(clientes => clientes.id !== id))
        } catch (error) {
             alert("Erro ao apagar o cliente, tente outra vez.")     
        }
    }

    function selecionarCliente(id){
        localStorage.setItem("idCliente", id)
        navegação("/cliente/atualizar")
    }

    return(
        <div className= "lista-clientes-conteiner">
            <div className= "menu">
                <Barra/>
            </div>
    <div className= "content-lista"> 
    <div className= "titulo-lista-clientes">
        <h1>Relatório de clientes</h1>
    </div>
    <div className= "lista-clientes">
    <table>
        <thead>
            <tr>
            <th>Cód</th>
            <th>Nome</th>
            <th>CPF</th>
            <th>Endereco</th>
            <th>Cidade</th>
            <th>Celular</th>
            <th>E-mail</th>
            <th>Atualizar</th>
            <th>Apagar</th>
            </tr>
        </thead>
        <tbody>
         {
             clientes.map(cliente=>(
                <tr key= {cliente.id}> 
                <th>{ cliente.id}</th>
                <th>{cliente.nome+" "+cliente.sobrenome}</th>
                <th>{cliente.cpf}</th>
                <th>{cliente.endereco}</th>
                <th>{cliente.cidade}</th>
                <th>{cliente.celular}</th>
                <th>{cliente.email}</th>
                <th>
                    <button type= "button" onClick= { () => selecionarCliente(cliente.id)} id="button-update">
                    <FiRotateCcw size= {20} color= "green"/>
                    </button>
                </th>
                <th>
                    <button type= "button" onClick= { () => deletarCliente(cliente.id)} id="button-delete">
                    <FiTrash2 size= {20} color= "red"/>
                    </button>
                </th>
          </tr>
             ))
         }   
            </tbody>
          </table>
         </div>
       </div>
     </div>
    )
}