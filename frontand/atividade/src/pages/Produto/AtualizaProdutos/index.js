import React, {useState, useEffect} from "react";
import api from "../../../services/api";
import {FiArrowLeftCircle} from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

import "./style.css"

import CarrinhoCompras from "../../../assets/img/logo-carrinho-de-compras.png";

export default function ListaProdutos(){

    const [nome, setNome] = useState("")
    const [categoria, setCategoria] = useState("")
    const [preco, setPreco] = useState(0)
    const [estoque, setEstoque] = useState(0)
    const [unidade, setUnidade] = useState("")
    const [marca, setMarca] = useState("")
    const [descricao, setDescricao] = useState("")

    const navegação = useNavigate();
    const id = localStorage.getItem("idProduto")
     console.log(id)

      useEffect( () => {
       try {
            api.get(`produto/busca/${id}`).then( response => { 
                setNome(response.data[0].nome)
                setCategoria(response.data[0].categoria)
                setPreco(response.data[0].preco)
                setEstoque(response.data[0].estoque)
                setUnidade(response.data[0].unidade)
                setMarca(response.data[0].marca)
                setDescricao(response.data[0].descricao)
              })      
       } catch (error) {    
       }
    }, [id]);
  
   async function executarAtualizacao(e){
    e.preventDefault();

     const dados = {
       nome,
       categoria,
       preco,
       estoque,
       unidade,
       marca,
       descricao
     }
      try{
       await api.put(`/produto/atualizar/${id}` , dados)
       alert('Dados atualizados com sucesso.')
       navegação("/produto/lista")
      }catch (error) {
       alert("Erro ao tentar atualizar.Tente novamente.")
      } 
    }
    return(
        <div className="novo-produto-conteiner">
          <div className= "content-atualizar">
            <section className= "produto-form-atualizar">
              <section className="logo-carrinho-compras">
                <img src= {CarrinhoCompras} alt= "carrinho de compras" style={ { width: "100%" } }/>

                <Link to= "/"> 
                <FiArrowLeftCircle size= {30} color= "#e02041"/>
                </Link>
                </section>
                <section className= "form-cadastro-produto">
                  <h1>Atualizar Produto</h1>
              <form onSubmit={executarAtualizacao}> 
             <input
             placeholder= "Nome"
             value= {nome}
             onChange= {e => setNome(e.target.value)}
             />
            <input
            placeholder= "Categoria"
             value= {categoria}
             onChange= {e => setCategoria(e.target.value)}
             style= { { width: "51%" } }
             />
            <input
            placeholder= "Preço"
             nome="preco"
             value= {preco}
             onChange= {e => setPreco(e.target.value)}
             style={ {width: "22%"} }
             />
           <input
           placeholder= "Estoque"
             value= {estoque}
             onChange= {e => setEstoque(e.target.value)}
             style={ { width: "22%" } }
             />
             <input
           placeholder= "Unidade"
             value= {unidade}
             onChange= {e => setUnidade(e.target.value)}
             style={ { width: "23%" } }
             />
               <input
           placeholder= "Marca"
             value= {marca}
             onChange= {e => setMarca(e.target.value)}
             style={ { width: "23%" } }
             /> 
              <input
           placeholder= "Descrição"
             value= {descricao}
             onChange= {e => setDescricao(e.target.value)}
             style= { { width: "95%" } }
             /> 
            
       <button className="button" style={ { width: "95%" } }>
         Atualizar
       </button>
              </form>
            </section>
           </section>
         </div>
      </div>
    )
}