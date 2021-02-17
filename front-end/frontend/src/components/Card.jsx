import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import image from "../assets/images/ghana.jpg";
import { Container, Table, Input, Button} from 'semantic-ui-react';
import { FaEye, FaHeart, FaShareSquare, FaArrowLeft, FaMapMarkerAlt } from "react-icons/fa";

import Wrapper from "./Wrapper";
import sacPoubelle from "../assets/images/sacPoubelle.jpg";
import hommePortePoubelle from "../assets/images/hommePortePoubelle.jpg";
import poubelle from "../assets/images/poubelle.jpg"
import Horaire from "./Horaire"
import TypeAbonnemt from "./TypeAbonnemt"

import styled from "styled-components";

const media = {
  phone: "@media(min-width: 320px)",
  phonelg: "@media(min-width: 375px)",
  phonebg: "@media(min-width: 425px)",
  allphone : "@media all and (max-width: 425px)"
};

const Img = styled.img`
  width: 300px;
  height: 150px;
  border-radius: 5px;
  
  ${media.allphone}{
    width : 100%;
  }
`;

const Containers = styled.div`
  
  padding: 0px 0px 150px;
  
  .entete{
    display : flex;
    
    > .section2 {
      margin-left : 10px;
      font-size : 17px;

      div{
        margin-bottom : 5px;
      }
    }

  }

    i {
      padding: 5px;
    }
  }
  ${media.allphone}{
      
    .entete{
      flex-direction : column;
      > .section2 {
        margin-left : 10px;
        font-size : 15px;
        margin-top : 10px; 
      }
    }
    

  }
`;




function Card({match}) {
  const [horaires, setHoraires] = useState([]);
  const [abonnements, setAbonnements] = useState([]);
  const data = JSON.parse(localStorage.getItem("detailStartup"))
  console.log(data)
  const ID = data.id

  useEffect(() => {
    axios
    .get(`http://localhost:4500/tarifs/startup/${ID}`)
    .then((res) => { setAbonnements(res.data)})
    axios
    .get(`http://localhost:4500/horaires/startup/${ID}`)
    .then((res) => { setHoraires(res.data)})
  },[]);
  
  return (
    <Container>
      <Wrapper>
        <Containers>
          <br/>
          <h2> Details</h2>
          
          <div className="entete">
            <div className = "section1">
              <Img src={image} alt="logo" />
            </div>
          
            <div className="section2">
              <div> 
                <strong>Nom : </strong> {data.nom.toUpperCase()}
              </div>
              <div>
                <strong>Description : </strong> {data.description}
              </div>
              <div>
                <strong>Adresse : </strong>
                <i>
                  <FaMapMarkerAlt style={{ marginRight: "10px" }} />
                  <span> {data.adresse} </span>
                </i>
              </div>
            </div>
          </div>  
                
          <br/>
          <h4> Abonnement</h4>
          <div>
            <TypeAbonnemt
              abonnements = {abonnements}
            />
          </div>
         
          <h4> Horaire</h4>
          <div>
            <Horaire
              horaires = {horaires}
            />
          </div>   

          <Link to='/FormAbonnemt'>
            <Button 
              positive
              // floated="right"
              className={`ui fluid large green submit button`}
            >
              S'abonner
            </Button>
          </Link> 

        </Containers>
      </Wrapper>
    </Container>
  );
}

export default Card;
