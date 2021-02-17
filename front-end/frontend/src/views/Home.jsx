import React from "react";
import { Link, NavLink} from 'react-router-dom';
import Header from "../components/Header"
import Wrapper from "../components/Wrapper";
import { Jumbotron as Jumbo, Container } from "reactstrap";
import styled from "styled-components";
import image from "../assets/images/ghana.jpg"


import Button from "../components/Button";

const HomeStyle = styled.div`
  .jumbotron {
    //background-image:linear-gradient(-45deg, rgba(34, 194, 119, 0.863),rgba(2, 97, 68, 0.616) ),url(${image});
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${image}) no-repeat fixed bottom;
    background-size: cover;
    height: 111.1vh;
    position: relative;
    // z-index: -2;
    padding-top : 140px;
    width : 100%;
  }

  .main {
    position: relative;
    top: 100px;
    h2 {
      color: white;
      font-weight: 500;
      margin-bottom: 90px;
      text-transform: uppercase;
    }
  }
  .slogan{
    font-family: Comfortaa;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
  }
`;

function Home() {
  return (
    <>
       <Header/>
      <HomeStyle>
        {/* <Wrapper>
       */}
          <Jumbo fluid className="jumbotron">
            <Container>
              <div className="main">
                <h2 className="text-center slogan">
                  Votre satisfaction, c'est notre priorité!
                </h2>
                <div>
                  <Button
                    namebutton="Liste de startups"
                    backgroundbutton="#78d45b"
                    color="008000"
                    lien="/listes-des-startups"
                    largeur = "100%"
                  />{" "}
                  <br />
                  <Button
                    namebutton="Voire mes abonnements"
                    backgroundbutton="#008000"
                    color="white"
                    lien="/Mes_abonnements"
                    largeur = "100%"
                  />
                </div>
              </div>
            </Container>
          </Jumbo>
        {/* </Wrapper> */}
      </HomeStyle>
    </>
  );
}

export default Home;
