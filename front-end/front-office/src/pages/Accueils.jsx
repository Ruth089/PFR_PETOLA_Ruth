import React from 'react';
import styled from "styled-components";
import { CSVLink} from "react-csv";
import { Container, Card , Icon} from 'semantic-ui-react';
import Button from '../components/Button'


import Cards from '../components/composantsAccueil/Cards'
// import "../scss/accueil.scss"
import BarreDeNavigation from '../components/BarredeNavigation'
import image from "../images/ghana.jpg"

const Accueils = () => {
    
    const description = [
        'Amy is a violinist with 2 years experience in the wedding industry.',
        'She enjoys the outdoors and currently resides in upstate New York.',
      ].join(' ')

    const headers = [
        {
            label : "chauffeur",
            key : "chauffeur"

        },
        {
            label : "client",
            key : "client"
        }
        ,
        {
            label : "type",
            key : "type"
        }
        
    ]

    const enregistrements = 
    [
        {
            chauffeur : 'chris', 
            client : 
                { 
                    nom : 'jo', 
                    BL : 'BN56', 
                    produits : 
                        {  
                            type : 'vcom',
                            qunatite : 23 
                        }
                }
        }
    ]

    const data = enregistrements.map(enregistrement => {
        let objet = {
            chauffeur : enregistrement.chauffeur,
            client : enregistrement.client.nom, 
            type : enregistrement.client.produits.type
        }
        return objet
    })
        console.log(data)

    return ( 
        <>
        <BarreDeNavigation/>
        <Accueil>
          <Banniere>
            <form className="form-banniere">
              <Container>
                <p>Votre statisfaction, notre priorité!</p>
                <div class="input-group mb-3 form-search">
                  <input type="text" class="form-control" placeholder="Autre input de type texte avec bouton" aria-label="Autre input type texte avec bouton" aria-describedby="texte-bouton"/>
                  <div class="input-group-append">
                    <button class="btn" type="button" id="texte-bouton">Bouton</button>
                </div>
                </div>
              </Container>
            </form>
          </Banniere>
          <br/>
          <Div>
          <Card>
            <Card.Content header='About Amy' />
            <Card.Content description={description} />
            <Card.Content extra>
            <Icon name='user' />4 Friends
            </Card.Content>
            </Card>
            
          </Div>
       
        Bonjour
        </Accueil> 
        <p>

          
        </p>
       

  <div>
    <CSVLink data={data} headers={headers} >salut</CSVLink>

  </div>
        </>
    );
}
export default Accueils;

const Accueil = styled.div`
    // display: flex;
    // flex-direction: column;
    // width : 100%;
    // margin-top : 0rem !important;
`;
const Banniere = styled.div`
  background-image:linear-gradient(-45deg, rgba(34, 194, 119, 0.863),rgba(2, 97, 68, 0.616) ),url(${image});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  box-shadow: 0px 2px 2px #797979;
  height: 40vh;
`;
const Div = styled.div`
    display : flex;
    flex-direction : row;
    width : 800px;
    margin :  0 auto;
    justify-content: space-around;
}
`;
