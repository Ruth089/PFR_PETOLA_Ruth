import React from "react";
import { Link} from 'react-router-dom';
import styled from "styled-components";

const media = {
  phone: "@media(min-width: 320px)",
  phonelg: "@media(min-width: 375px)",
  phonebg: "@media(min-width: 425px)",
};

const TitreStyle = styled.h1`
font-size: 2.5em;
text-align: center;
// color: palevioletred;

`;
  

// const Link = styled.a`
//   text-decoration: none;
//   color: white;
// `;

function Titre ({ name, backgroundcolor, color, lien }) {
  return (
    // <div>
    //   <Link to={lien} >
        <TitreStyle
          style={{ background: `${backgroundcolor}`, color: `${color}` }}
        >
          {name}
        </TitreStyle>
    //   </Link>
    // </div>
  );
}

export default Titre ;