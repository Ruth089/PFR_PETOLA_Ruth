import React, { useState }from 'react'
import axios from "axios";
import { useForm } from "react-hook-form";
import { Form, Container, Select, Button} from 'semantic-ui-react'
import Header from "../components/Header"
import Wrapper from "../components/Wrapper";
import styled from "styled-components";
import { Card, Icon } from 'semantic-ui-react'



const DivStyle = styled.div`
    padding : 10px;
    // padding-bottom: 13px
`
const Pstyle = styled.p`
    text-align: center;
    color: red
`
const FormAbonnemt = (props) => {
    const { register, errors } = useForm()
    const [adresse, setAdresse] = useState("");
    const [duree, setDuree] = useState("");
    const [tarif, setTarif] = useState("");
    const [error, setError] = useState(null);

    const data = JSON.parse(localStorage.getItem("detailStartup"))
    const IdUser = JSON.parse(localStorage.getItem("IdUser"))

    let idTarif 
    let montant 
    if (duree === "1 mois") {
        idTarif= data.Tarif1
        montant = data.Montant1
    } 
    else {
        idTarif = data.Tarif2
        montant = data.Montant2
    }

    const redirection1 = () => "/Mes_abonnements";
    const handleSubmit = (event) => {
        event.preventDefault();
        if ( adresse === "" &&  duree === "" ) {
            setError("veillez renseigner le champs vide");
            return true;
        } else {
            setError(null);
            
           
            const abonnement = {
              duree: duree,
              adresse: adresse
            }
            setAdresse("")
            setDuree("")
            setTarif("")
            const endpoint = `http://localhost:4500/abonnements/utilisateur/${IdUser}/tarif/${idTarif}`;
      
            axios
            .post(endpoint, abonnement)
            .then((res) => {
                console.log(res.data)
                // props.history.push("/animation");
                setTimeout(function () {props.history.push("/Mes_abonnements")}, 3000);
                
            })

            
        } 
        // redirection1() FormAbonnemt  /Mes_abonnements
    };
   
   
   return (
        <Wrapper>
            <Container>
                <DivStyle>
                    <br/>
                    <h2>Formulaire d'abonnement</h2>
                    <br/>
                    <Form>
                        <Form.Input
                            ref={register}
                            value={adresse}
                            name="adresse"
                            placeholder="Adresse Ex: "
                            onChange={(event) => setAdresse(event.target.value)}
                        />
                        <div style={{ color: "red" }}>{Error}</div>

                        <Form.Input style={{color : "black"}}
                            // fluid
                            id="form-subcomponent-shorthand-input-last-name"
                            ref={register}
                            control={Select}
                           
                            options={[
                                { key: "Mensuel", text: "Mensuel", value: "1 mois" },
                                { key: "Trimestriel", text: "Trimestriel", value: "3 mois" }
                            ]}
                            placeholder="Type d'abonnement"
                            
                            searchInput={{ id: "form-select-control-gender" }}
                            onChange={(e, { value }) => {
                                setDuree(value);
                                console.log(e, value);
                                setTarif(montant)
                                console.log(tarif)
                            }}
                            
                        />
                        <div style={{ color: "red" }}>{Error}</div>
                        <Form.Input 
                            ref={register} 
                            name = "montant"
                            placeholder="Montant.."  
                            value={tarif}  
                            onChange={(event) => setTarif(event.target.value)}

                        />
                    <br/>
                    <div>
                            <Button 
                                positive
                                onClick = {handleSubmit}
                                className={`ui fluid large green submit button`}
                            >
                                Valider
                            </Button>
                        </div>
                        
                    </Form>
                </DivStyle>
            </Container>
        </Wrapper>
   )
}

export default FormAbonnemt;