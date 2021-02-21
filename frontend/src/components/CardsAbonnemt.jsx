import React, { useEffect, useState } from "react";
import axios from "axios";
import { Segment } from 'semantic-ui-react'
import image from "../assets/images/ghana.jpg"
import { Link } from "react-router-dom";
import CardUi from "./CardUiAbonnemt";

// import data from "./data";

function CardsAbonnement () {

  const [datas, setDatas] = useState([]);
  const IdUser = JSON.parse(localStorage.getItem("IdUser"))

  useEffect(() => {
      axios
        .get(`http://localhost:4500/abonnements/utilisateur/${IdUser}`)
        .then((res) => {
          setDatas(res.data);
          console.log(res.data)
        })
  }, [setDatas]);

  if (datas.length == 0 ){

    return (
      <div>
        <Segment>Vous n'avez aucun abonnement</Segment>
      </div>
    )

  }else{

    return (
      <div style={{paddingBottom : "100px" }}>
        {datas.map((item, index) => (
          <div
            style={{ textDecoration: "none", color: "black" }}
            // to={`/startups/${item.id}`}
          >
            <CardUi
              key={index}
              image={image}
              nom ={item.Tarif.Startup.nom}
              typeAbonnement ={item.Tarif.type_de_collecte}
              dateAbonnement = {item.Tarif.Startup.createdAt}
            />
           
          </div>
        ))}
      </div>
    );

  }

  
}

export default CardsAbonnement;
