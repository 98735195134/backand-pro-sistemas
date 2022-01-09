import React, {useState} from "react";
import { Button, Row, Textarea, Col, TextInput } from "react-materialize";
import Barra from "../../../components/Barra";
import api from "../../../services/api";

import "./style.css";

export default function CadastroProduto(){

    const [nome,setNome] = useState("");
    const [categoria, setCategoria] = useState("");
    const [preco, setPreco] = useState(0);
    const [estoque, setEstoque] = useState(0);
    const [unidade, setUnidade] = useState("");
    const [marca, setMarca] = useState("");
    const [descricao, setDescricao] = useState("");

   async function cadastrarProduto(){
        const dados = {
            nome,
            categoria,
            preco,
            estoque,
            unidade,
            marca,
            descricao
        }
        try {
           await api.post("/produto/cadastro", dados)
           alert("O produto foi cadastrado com sucesso.")
        } catch (error) {
            alert( "Houve um problema no cadastro. Tente novamente.")
        }
    }
    return(
        <div className= "novo-produto-conteiner">
            <div className= "menu">
                <Barra/>
            </div>
            <div className= "form-produto">
             < form onSubmit={cadastrarProduto}>
                 <Row>
                     <Col s={8}>
                         <Row>
                             <Col s={6}>
             <TextInput
                label="Nome"
                s={12}
                value={nome}
                onChange={e => setNome(e.target.value)}
                />
                 </Col>
                 <Col s={6}>
                <TextInput
                label="Categoria"
                s={12}
                value={categoria}
                onChange={e => setCategoria(e.target.value)}
                />
                </Col>
                </Row>
                <Row>
                 <Col s={6}>   
                <TextInput
                label="Preço"
                s={12}
                value={preco}
                onChange={e => setPreco(e.target.value)}
                />
                 </Col>
                 <Col s={6}>
                <TextInput
                label="Estoque"
                s={12}
                value={estoque}
                onChange={e => setEstoque(e.target.value)}
                />
               </Col>
                </Row>
                <Row>
                    <Col s={6}>
                <TextInput
                label="Unidade"
                s={12}
                value={unidade}
                onChange={e => setUnidade(e.target.value)}
                />
                </Col>
                <Col s={6}>
                <TextInput
                label="Marca"
                s={12}
                value={marca}
                onChange={e => setMarca(e.target.value)}
                />
                </Col>
                </Row>
                <Row>
                    <Textarea
                    label= "Descrição"
                      l={12}
                      m={12}
                      s={12}
                      xl={12}
                      value={descricao}
                      onChange={e => setDescricao(e.target.value)}
                    />
                </Row>
                <Button
                flat
                node="button"
                style={{
                    marginRight: "5px"
                }}
                waves="green"
                className="button"
                >Cadastro
                    </Button>
                    </Col>
                    </Row>
             </form>
            </div>
        </div>   )
}

