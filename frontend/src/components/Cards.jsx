import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Input, Icon } from "semantic-ui-react";
import CardUi from "./CardUi";
import image from "../assets/images/ghana.jpg"

function Cards() {
  const [data, setData] = useState([]);
  const [motCles, setMotCle] = useState("");

  useEffect(() => {
      axios
        .get("http://localhost:4500/startups")
        .then((res) => {
          setData(res.data);
        })
  }, [setData]);

  console.log(data)
  const donnees = motCles
    ? data.filter( (motCle) =>
        
        motCle.nom.toLowerCase().includes(motCles.toLowerCase())) 
      
    : data.filter((motCle) => motCle);
  
  console.log(donnees)
  return (
    <div>
      <div className="recherche">
        <Input fluid icon="search" 
          placeholder="Rechercher" 
          onChange={(e) => setMotCle(e.target.value)}
        />
      </div>
      <div >
        {donnees.map((item, index) => (
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={`/details`}
            onClick={() => {
              localStorage.setItem(
                "detailStartup",
                JSON.stringify({
                  id: item.id,
                  nom: item.nom,
                  description : item.description,
                  adresse : item.adresse,
                  Tarif1 : item.Tarifs[0].id,
                  Tarif2 : item.Tarifs[1].id,
                  Montant1 : item.Tarifs[0].prix,
                  Montant2 : item.Tarifs[1].prix
                  //   item.employes[0].employeVehicules.vehiculeId,
                })
              );
            }}
          >
            <CardUi
              key={index}
              image={image}
              nom={item.nom}
              description={item.description}
              adresse={item.adresse}
            />
          
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Cards;
