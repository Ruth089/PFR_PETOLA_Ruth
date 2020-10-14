import React from "react";
// import { Link} from 'react-router-dom';
import styled from "styled-components";

const media = {
  phone: "@media(min-width: 320px)",
  phonelg: "@media(min-width: 375px)",
  phonebg: "@media(min-width: 425px)",
};

const ButtonStyle = styled.button`
  ${media.phone} {
    width: 100%;
    margin: 0 auto;
    height: 50px;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    font-family: Comfortaa;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 14px;
  }
`;

// const Link = styled.a`
//   text-decoration: none;
//   color: white;
// `;

function Button({ namebutton, backgroundbutton, color, lien }) {
  return (
    // <div>
    //   <Link to={lien}>
    //     <ButtonStyle
    //       style={{ background: `${backgroundbutton}`, color: `${color}` }}
    //     >
    //       {namebutton}
    //     </ButtonStyle>
    //   </Link>
    // </div>
    <div className="form-group">
        <button type="submit" className="btn mt-5 rounded-pill btn-lg btn-custom btn-block text-uppercase">
          {namebutton}
        </button>
    </div>
  );
}

export default Button;
