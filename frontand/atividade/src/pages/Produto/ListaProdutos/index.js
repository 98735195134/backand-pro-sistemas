import React, {useEffect, useState} from "react";
import {FiTrash2, FiRotateCcw} from "react-icons/fi";
import {useNavigate} from "react-router-dom";
import Barra from "../../../components/Barra";
import api from "../../../services/api";

import "./style.css";


export default function ListaProdutos(){

    const [produto, setProdutos] = useState([]);
    const navegação = useNavigate()

    useEffect(() => {
    api.get("/produto/listar").then( response => {
        setProdutos(response.data)
    })
    }, [])

   async function deletarProduto(id){
        try {
            await api.delete(`/produto/apagar/${id}`)
            setProdutos(produto.filter(produto => produto.id !== id))
        } catch (error) {
             alert("Erro ao apagar o produto, tente outra vez.")     
        }
    }

    function selecionarProdutos(id){
        localStorage.setItem("idProduto", id)
        navegação("/produto/atualizar")
    }

    return(
        <div className= "lista-produtos-conteiner">
            <div className= "menu">
                <Barra/>
            </div>
    <div className= "content-lista-produtos"> 
    <div className= "titulo-lista-produtos">
        <h1>Relatório de produtos</h1>
    </div>
    <div className= "listar-produtos">
    <table>
        <thead>
            <tr>
            <th>Cód</th>
            <th>Nome</th>
            <th>Categoria</th>
            <th>Preço</th>
            <th>Estoque</th>
            <th>Unidade</th>
            <th>Marca</th>
            <th>Descrição</th>
            <th>Atualizar</th>
            <th>Apagar</th>
            </tr>
        </thead>
        <tbody>
         {
             produto.map(produto=>(
                <tr key= {produto.id}> 
                <th>{produto.id}</th>
                <th>{produto.nome}</th>
                <th>{produto.categoria}</th>
                <th>{Intl.NumberFormat("pt-Br", {style: "currency", currency:"BRL"}).format(produto.preco)}</th>
                <th>{produto.estoque}</th>
                <th>{produto.unidade}</th>
                <th>{produto.marca}</th>
                <th>{produto.descricao}</th>
                <th>
                    <button type= "button" onClick={  () => selecionarProdutos(produto.id)} id="button-update">
                    <FiRotateCcw size= {20} color= "green"/>
                    </button>
                </th>
                <th>
                    <button type= "button" onClick={ () => deletarProduto(produto.id)} id="button-delete">
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
