import React from "react";
import "../scss/connexion.scss";
import { Form, Container,Checkbox, Grid, Segment, Icon } from "semantic-ui-react";

const Inscription = () => {
    return ( 
        <Container style={styleContainer}> 
        <div className ="login">
        
        <form className="login-form text-center">

            <h1 className="mb-5 font-weight-light text-uppercase">S'inscrire</h1>

            <div className="form-group">
                <input type="text" className="form-control form-control-lg" placeholder="Username"/>
            </div>

            <div className="form-group">
                <input type="text" className="form-control form-control-lg" placeholder="Email"/>
            </div>

            <div className="form-group">
                <input type="text" className="form-control form-control-lg" placeholder="Password"/>
            </div>

            <div className="form-group">
                <input type="text" className="form-control  form-control-lg" placeholder="Confirm password"/>
            </div>
            
            <button type="submit" className="btn mt-5 rounded-pill btn-lg btn-custom btn-block text-uppercase">S'inscrire</button>
           
        </form>
        </div> 
        </Container>
        
    );
}
 
export default Inscription;

const styleContainer = {
    paddingTop : "10rem"
}