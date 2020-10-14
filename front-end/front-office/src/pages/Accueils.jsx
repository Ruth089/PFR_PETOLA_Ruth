import React from 'react';
import styled from "styled-components";
import "../scss/accueil.scss"
import BarreDeNavigation from '../components/BarredeNavigation'

const Accueils = () => {
    return ( 
        <Accueil>
            <BarreDeNavigation/>

            <div id="banniere_image">
                <div id="banniere_description">
                    <form className="form-banniere">
                        <p>Votre statisfaction, notre priorité!</p>
                        <div class="input-group mb-3 form-search">
                            <input type="text" class="form-control" placeholder="Autre input de type texte avec bouton" aria-label="Autre input type texte avec bouton" aria-describedby="texte-bouton"/>
                            
                            <div class="input-group-append">
                                <button class="btn" type="button" id="texte-bouton">Bouton</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        Bonjour
        </Accueil> 
    );
}
export default Accueils;

const Accueil = styled.div`
    display: flex;
    flex-direction: column;
    width : 100%
`;


