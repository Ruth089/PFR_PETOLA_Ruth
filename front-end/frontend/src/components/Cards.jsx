import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CardUi from "./CardUi";
import image from "../assets/images/ghana.jpg"

function Cards() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
      axios
        .get("http://localhost:4500/startups")
        .then((res) => {
          setDatas(res.data);
        })
  }, [setDatas]);
  

  return (
    <div >
      {datas.map((item, index) => (
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
  );
}

export default Cards;
