import React, { useState } from 'react';
import styled from "styled-components";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
      <Nav>
        <Logo href="">
          Petola<span>petola</span>
        </Logo>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </Hamburger>
        <Menu isOpen={isOpen}>
          <MenuLink href="/">Accueil</MenuLink>
          <MenuLink href="">Article en vente</MenuLink>
          <MenuLink href="">Mes abonnements</MenuLink>
          <MenuLink href="">Deconnexion</MenuLink>
        </Menu>
      </Nav>
      <div style={style}></div>
      </>
    );
  };
  
  export default Navbar;
  
  const MenuLink = styled.a`
    padding: 0rem 1rem;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    color: #67bc98;
    transition: all 0.3s ease-in;
    font-size: 1.2rem;
    &:hover {
      color: #67bc98;
    }
  `;
  
  const Nav = styled.div`
    padding: 0rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background: white;
    position: fixed;
    z-index: 1;
    width: 100%;
    top: 0;
    margin-bottom: 100rem !important;
  `;
  
  const Logo = styled.a`
    padding: 1rem 0;
    color: #67bc98;
    text-decoration: none;
    font-weight: 800;
    font-size: 1.7rem;
    &:hover {
      color: #67bc98;
    }
    span {
      font-weight: 300;
      font-size: 1.3rem;
    }
    
  `;
  
  const Menu = styled.div`
  
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    @media (max-width: 768px) {
      overflow: hidden;
      flex-direction: column;
      max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
      transition: max-height 0.3s ease-in;
      width: 100%;
    }
  `;
  
  const Hamburger = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;
    span {
      height: 3px;
      width: 25px;
      background: #67bc98;
      margin-bottom: 4px;
      border-radius: 5px;
    }
    @media (max-width: 768px) {
      display: flex;
    }
  `;
  const style = {
    width : "100%",
    height : "11vh",
    background : "blue"
  }
