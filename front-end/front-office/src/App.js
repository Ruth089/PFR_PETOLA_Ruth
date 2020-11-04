import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyle from  "./style/GlobalStyle";

import PageDeConnexion from './pages/Connexion';
import Inscription from './pages/Inscription';
import Accueils from "./pages/Accueils"
import TableExamplePagination from "./pages/TableExamplePagination"



// const Apps = styled.div`
//@import url('https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900');
// *{
//     box-sizing: border-box;
//     font-family: 'Poppins', sans-serif;
//     padding: 0;
//     margin: 0;
   

// }`
    

 


function App() {
  return (
    
    <Router> 
      <>
        <Route exact path="/" component={PageDeConnexion} />
        <Route path="/Inscription" component={Inscription} />
        <Route exact path="/Accueil">
            <Accueils/>
        </Route>
        
        <GlobalStyle/> 
      </>
    </Router>
    
  
  );
}

export default App;
