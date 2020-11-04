import React from "react";
import { Container } from "semantic-ui-react";
import Inputs from "../components/Input"
import Buttons from "../components/Button"
// import Headers from "./"
import "../scss/connexion.scss"
import styled from "styled-components";
//className="login-container"
const PageDeConnexion = () => {
    return ( 
        <Container style={styleContainer}>

        <form className="login-form text-center">
            <h1 className="mb-5 font-weight-light text-uppercase">Login</h1>

            <div className="form-group">
                <input type="text" className="form-control  form-control-lg" placeholder="Username"/>
            </div>

            <div className="form-group">
                <input type="text" className="form-control  form-control-lg" placeholder="Password"/>
            </div>

            <div className="forgot-link form-group d-flex justify-content-between align-items-center">
                <div className="form-check">
                    <input type="checkbox" className="form-check-input btn-custom" id="remember"/>
                    <label className="form-check-label" for="remember">Se souvenir du mot</label>
                </div>
                <a href="#">Mot de passe oublié?</a>
            </div>
            
            <button type="submit" className="btn mt-5 rounded-pill btn-lg btn-custom btn-block text-uppercase">Log in</button>
            <p className="mt-3 font-weight-normal">Vous n'avez pas de compte? <a href="/Inscription"><strong>Inscrivez-vous dès maintenant</strong></a></p>
           
        </form>


        </Container>
        
    );
}
 
export default PageDeConnexion;

const styleContainer = {
    paddingTop : "10rem"
}