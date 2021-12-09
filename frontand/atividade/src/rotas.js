import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/index.js";
import NovoCliente from "./pages/Cliente/NovoCliente/index";


export default function Rotas(){
    return(
        <BrowserRouter>
          <Routes>
             <Route path= "/" exact element={<Home/>}/>
             <Route path="/cliente/cadastro" element={<NovoCliente/>}/>
          </Routes>
        </BrowserRouter>
    )
}
