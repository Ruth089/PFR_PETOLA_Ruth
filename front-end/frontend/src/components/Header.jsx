import React, { useState } from "react";
import { Link} from 'react-router-dom';
import styled from "styled-components";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

// import logo from "../assets/images/logo_petola.png";
import logo from "../assets/images/logo_petola.png"


const HeaderStyle = styled.header`
  width: 100%;
  
 
  strong{
    color : #A6CE39;
    font-size: 20px;
    font-weight: 900;
    font-family: comforta;
  }
  img {
    margin-left : 5px;
    width: 50px;
    height: 50px;
    border-radius : 100%;
    border : 5px solid #A6CE39;
    paddind : 0px;
  }
  .nav-bar {
    box-shadow: 5px 10px 10px 5px #ccc;
  }
  .nav {
    display: flex;
    // justify-content: flex-end;
  }
  .collapse,
  .navbar-toggle {
    &:focus {
      outline: none;
    }
  }

`;

 const UrlStyle = styled.a`
    color : black;
    margin-left : 20px;
    &:hover {
      text-decoration: none;
      color : black;
    }
 `; 


function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const deconnect = () => {
    localStorage.clear();
    window.location.href = "/";
  }

  const toggle = () => setIsOpen(!isOpen);
  return (
    <HeaderStyle>
      <Navbar color="white" light expand="sm" fixed="top">
        <NavbarBrand href="/accueil" className=".logo">
          <img src={logo} alt="logo" />
          <strong>Petola</strong>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto text-center" navbar>
          <NavItem>
            <UrlStyle href="/accueil">Acceuil</UrlStyle> 
          </NavItem> 
            
           <NavItem>
              <UrlStyle href="/listes-des-startups">Liste de startups</UrlStyle> 
            </NavItem>
            <NavItem>
              <UrlStyle href="/Mes_abonnements">Mes abonnements</UrlStyle> 
            </NavItem>
            <NavItem>
              <UrlStyle 
              onClick = {deconnect}
            >Déconnexion</UrlStyle> 
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </HeaderStyle>
  );
}

export default Header;
