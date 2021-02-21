import React from "react";
import styled from "styled-components";
import Wrapper from "../components/Wrapper";
import Button from "../components/Button";
import Cards from "../components/Cards";
import { Input } from "semantic-ui-react";
import { Container } from "reactstrap";
import Recherche from "../components/Recerche"

const media = {
  phone: "@media(min-width: 320px)",
  phonelg: "@media(min-width: 375px)",
  phonebg: "@media(min-width: 425px)",
  allphone : "@media all and (max-width: 425px)",
  alltablette : "@media all and (max-width: 1024px)",
  allphone1: "@media all and (min-width: 400px)",

};

const ListeStyle = styled.div`
  
  // padding-bottom : 100px;

  h1 {
    
    margin-bottom: 30px;
  }
  .recherche {
    margin-bottom: 20px;
    width : 400px;
    float : rigth;
  }
  ${media.allphone}{
    .recherche {
      width : 280px; 
    }
  }
  
`;

function Listes() {
 
  return (
  <Container>
    <Wrapper >
      <ListeStyle>
        <br />
        <h2>Liste de startup</h2>
        <br/>
        
        <Cards />
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
