import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/index.js";
import NovoCliente from "./pages/Cliente/NovoCliente/index";
import ListaClientes from "./pages/Cliente/ListaClientes/index.js";
import AtualizaCliente from "./pages/Cliente/AtualizaCliente/index";

export default function Rotas(){
    return(
        <BrowserRouter>
          <Routes>
             <Route path= "/" exact element={<Home/>}/>
             <Route path="/cliente/cadastro" element={<NovoCliente/>}/>
             <Route path="/cliente/lista" element={<ListaClientes/>}/>
             <Route path="/cliente/atualizar" element={<AtualizaCliente/>}/>
          </Routes>
        </BrowserRouter>
    )
}
