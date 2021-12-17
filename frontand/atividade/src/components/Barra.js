import React from "react";
import { Navbar, Icon, NavItem, Dropdown, Divider} from "react-materialize";
import { Link } from "react-router-dom";

export default function Barra(){
    return (
        <div className= "barra">
         <> 
         <Navbar
  alignLinks="right"
  brand={<a className="brand-logo" href="#">Logo</a>}
  id="mobile-nav"
  menuIcon={<Icon>menu</Icon>}
  options={{
    draggable: true,
    edge: 'left',
    inDuration: 250,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 200,
    preventScrolling: true
  }}
>
  <NavItem href="/">
    Home
  </NavItem>
  <NavItem href="components.html">
    Components
  </NavItem>
  <Dropdown
    id="Dropdown_14"
    options={{
      alignment: 'left',
      autoTrigger: true,
      closeOnClick: true,
      constrainWidth: true,
      container: null,
      coverTrigger: true,
      hover: false,
      inDuration: 150,
      onCloseEnd: null,
      onCloseStart: null,
      onOpenEnd: null,
      onOpenStart: null,
      outDuration: 250
    }}
    trigger={<a href="#!">Cliente{' '}<Icon right>arrow_drop_down</Icon></a>}
  >
    <Link to="/cliente/cadastro">
      Cadastro
    </Link>
    <Link to="/cliente/lista">
      Lista
    </Link>
    <Divider />
    <Link to="#">
      three
    </Link>
  </Dropdown>
</Navbar>
     </>
 </div>
 )
}