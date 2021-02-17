import React,{Component} from 'react'
import { Form, Container, Button, Input} from 'semantic-ui-react'
import { withRouter } from "react-router-dom";
import axios from "axios"
import Header from "../components/Header"
// import Input from "../components/Input"
import Buttons from "../components/Button"
import Titre from "../components/Titre"
import logo from "../assets/images/logo_petola.png"
import styled from "styled-components"

const jwtDecode = require("jwt-decode");

const media = {
  phone: "@media(min-width: 320px)",
  phonelg: "@media(min-width: 375px)",
  phonebg: "@media(min-width: 425px)",
};

const DivStyle = styled.div`
  padding : 55px 0 15px;
`;

const MaDiv = styled.div`
  display : flex;
  justify-content: center;
  align-items : center;
  margin : 10px 0 10px;
  font-family : Italique;


`;
const Div = styled.div`
  display : flex;
  justify-content: center;
  align-items : center;
  margin-bottom : 25px;
`;
const Logo = styled.img`
// #78d45b
  border-radius: 90%;
  border : 10px solid #a6ce39;
  width : 120px;
  height: 120px;

`;

class Inscription  extends Component {

  constructor(props) {
      super(props);
    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);
    this.CreateUser= this.CreateUser.bind(this)
  
    this.state = {
      nom: "",
      prenom: "",
      identifiant: "",
      pwd: "",
      pwdConfirmer: "",
      nomslError: "",
      pwdError: "",
      loader: "",
    };
  }
  
  handleChange = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
      ? event.target.checked
      : event.target.value,
    });
  };
  
  validate = () => {
    let nomsError = "";
    let pwdError = "";
  
    if (!this.state.nom) {
      nomsError = "nom incorrect!";
    }
    if (!this.state.prenom) {
      nomsError = "prenom incorrect!";
    }
    if (!this.state.identifiant) {
      nomsError = "Identifiant incorrect!";
    }
    if (!this.state.pwd) {
      pwdError = "Mot de passe incorrect!";
    }
  
    if (nomsError || pwdError) {
      this.setState({ nomsError, pwdError });
      return false;
    }
    return true;
  };

  CreateUser = (event) => {
    event.preventDefault();

    // if (this.state.nom !== this.state.pwdConfirmer) {
    //   alert("La confirmation du mot de passe est incorrect, veillez reprendre")
    //   this.setState({ loader: "", nom: "", pwd: "", prenom : "", identifiant:"",  })
    //   return false;
    // }

    const endpoint = `http://localhost:4500/utilisateurs`;
  
    let user = {
      nom: this.state.nom,
      prenom : this.state.prenom,
      identifiant :this.state.identifiant,
      pwd: this.state.pwd
    };
    
    axios.post(endpoint, user)
    .then((res) => {
      console.log(res.data);
      const donne = res.data;
      localStorage.setItem("authorization", donne);
  
      // const decryptedToken = jwtDecode(donne);
      console.log(donne);
      const ID = donne[0].id
      localStorage.setItem("IdUser", ID)
      return this.props.history.push("/accueil");
    })
   
    .catch((err) => {
      console.log(err.data)
      alert("echec")
      this.setState({ loader: "", nom: "", pwd: "", prenom : "", identifiant:"",  })
    });
  
  }

  render(){
    const { loader } = this.state
    return ( 
      <>
        <DivStyle>
          <Container>
            <Div>
              <Logo src={logo} alt="logo petola"/>
            </Div>
            <Titre name="INSCRIPTION"/>
            <br/>
            <Form className="ui large form" >
              <div className="ui stacked secondary">
                  <div className="field">
                    <div className="ui left input">
                      <input
                        type="text"
                        name="nom"
                        placeholder="Nom"
                        value={this.state.nom}
                        onChange={this.handleChange}
                      />
                      
                    </div>

                    {/* <div style={{ color: "red" }}>{this.state.nomsError}</div> */}
                  </div>
                  <div className="field">
                    <div className="ui left input">
                      <input
                        type="text"
                        name="prenom"
                        placeholder="Prenom"
                        value={this.state.prenom}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div style={{ color: "red" }}>{this.state.nomsError}</div>
                  </div>
                  <div className="field">
                    <div className="ui left input">
                    
                      <input
                        type="text"
                        name="identifiant"
                        placeholder="Identifiant"
                        value={this.state.identifiant}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div style={{ color: "red" }}>{this.state.nomsError}</div>
                  </div>
                  <div className="field">
                    <div className="ui left input">
                      
                      <input
                        type="password"
                        name="pwd"
                        placeholder="Mot de passe"
                        value={this.state.pwd}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div style={{ color: "red" }}>{this.state.nomsError}</div>
                  </div>
                  {/* <div className="field">
                      <div className="ui left input">
                          <input
                            type="password"
                            name="pwdConfirmer"
                            placeholder="Confirmer mot de passe"
                            minLength="5"
                            maxLength="20"
                            value={this.state.pwdConfirmer}
                            onChange={this.handleChange}
                          />
                      </div>
                          <div style={{ color: "red" }}>{this.state.pwdError}</div>
                        </div> */}

                        <button
                          positive
                          className={`ui fluid ${loader} large green submit button`}
                          onClick={this.CreateUser}
                        >
                          Valider
                        </button>
                       
                      </div>
            </Form>                    
          </Container>
        </DivStyle>
      </>
    )
  }
}


export default Inscription