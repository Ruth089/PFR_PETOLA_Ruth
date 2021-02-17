import React,{Component} from 'react'
import { Form, Container, Button, Input} from 'semantic-ui-react'
import { withRouter, Link} from "react-router-dom";
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
  padding : 80px 0 20px;
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

class Connexion  extends Component {

  constructor(props) {
      super(props);
    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.CreateUser= this.CreateUser.bind(this)
  
    this.state = {
      identifiant: "",
      pwd: "",
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

    const endpoint = `http://localhost:4500/utilisateurs`;
  
    let user = {
      identifiant : this.state.identifiant,
      pwd: this.state.pwd
    };
    
    axios.post(endpoint, user)
    .then((res) => {
      console.log(res.data);
      return this.props.history.push("/accueil");
    })
   
    .catch((err) => {
      console.log(err.data)
      this.setState({ loader: "", identifiant: "", pwd: "" });
    });
  
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
      // const isValid = this.validate();
  
    this.setState({ loader: "loading" });
  
    const endpoint = "http://localhost:4500/utilisateurs/login";
  
    let user = {
      identifiant: this.state.identifiant,
      pwd: this.state.pwd,
    };
  
    axios.post(endpoint, user)
    .then((res) => {
      const token = res.data.token;
      localStorage.setItem("authorization", token);
  
      // const decryptedToken = jwtDecode(token);
      console.log(token);
      const ID = token[0].id
      localStorage.setItem("IdUser", ID)
          
      return this.props.history.push("/listes-des-startups");
    })
    .catch((err) => {
      alert("Authentification echoué");
      this.setState({ loader: "", identifiant: "", pwd: "" });
    });
  };

  render(){
    const { loader } = this.state
    return ( 
      <>
        <DivStyle>
          <Container>
            <Div>
              <Logo src={logo} alt="logo petola"/>
            </Div>
            <Titre name="CONNEXION"/>
            <br/>
            <Form className="ui large form" >
              <div className="ui stacked secondary">
                  <div className="field">
                    <div className="ui left icon input">
                      <i className="user icon"></i>
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
                          <div className="ui left icon input">
                            <i className="lock icon"></i>
                            <input
                              type="password"
                              name="pwd"
                              placeholder="Mot de passe"
                              minLength="5"
                              maxLength="20"
                              value={this.state.pwd}
                              onChange={this.handleChange}
                            />
                          </div>
                          <div style={{ color: "red" }}>{this.state.pwdError}</div>
                        </div>

                        <button
                          positive
                          className={`ui fluid ${loader} large green submit button`}
                          onClick={this.handleSubmit}
                        >
                          Se connecter
                        </button>
                        <MaDiv>
                         
                          <h5>Ou</h5>
                          
                        </MaDiv>
                        <Link to = "/inscription">
                          <button
                            positive
                            className={`ui fluid large green submit button`}
                            // onClick={this.CreateUser}
                          >
                            Créer un compte
                          </button>
                        </Link>
                      </div>
            </Form>                    
          </Container>
        </DivStyle>
      </>
    )
  }
}


export default Connexion