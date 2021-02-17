import React from "react";
import styled from "styled-components";
import Wrapper from "../components/Wrapper";
import Button from "../components/Button";
import CardsAbonnemt from "../components/CardsAbonnemt";
import { Container } from "reactstrap";
import Recherche from "../components/Recerche"

const ListeStyle = styled.div`
  padding: 10px;

  h1 {
    
    margin-bottom: 30px;
  }
  .recherche {
    margin-bottom: 30px;
   display : flex;
  }
`;

function Listes() {
  return (
  <Container>
    <Wrapper>
      <ListeStyle>
        <br />
        <h2>Mes abonnements</h2>
        <br/>
        <CardsAbonnemt/>
        {/* <Button
          namebutton="afficher par categorie"
          backgroundbutton="#c80000"
          color="white"
          lien="/affichage"
        /> */}
      </ListeStyle>
    </Wrapper>
    </Container>
  );
}

export default Listes;
