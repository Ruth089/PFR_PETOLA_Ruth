import React from "react";

import styled from "styled-components";
import { FaEye, FaHeart, FaMapMarkerAlt } from "react-icons/fa";

const CardStyled = styled.div`
  margin-bottom : 15px;
  border-bottom : 2px solid #8f8f8f;
  padding-bottom : 5px;
  .contenu {
    display: flex;
    // justify-content: space-between;
  }
  .reaction {
    display: flex;
    // justify-content: space-between;

    i {
      padding: 2px;
      color : blue;
    }
  }
`;
const DivStyle = styled.div`
  margin-left: 15px;
`;
const Img = styled.img`
  width: 130px;
  height: 80px;
  border-radius: 5px;
  // margin-left: 10px;
`;
const TitreStyle = styled.h5`
  text-align: left;
  // margin-left: 10px;
`;
const Text = styled.p`
  font-size: 1rem;
  text-align: left;
  margin-left : 10px;
`;

const CardUi = (props) => {
  const { image, nom,description , adresse} = props;
  return (
    <CardStyled>
      <div className="contenu">
        <Img src={image} alt="image" />
        <DivStyle>
          <TitreStyle> {nom.toUpperCase()} </TitreStyle>
          <Text> {description} </Text>
          <i>
            <FaMapMarkerAlt style={{ marginRight: "5px" }} />
            <span> {adresse} </span>
          </i>
        </DivStyle>
      </div>
      
      {/* <div className="reaction">
        <i>
          <FaEye style={{ marginRight: "10px" }} />
          <span>1227</span>
        </i>
        <i>
          <span>2</span>
          <FaHeart style={{ marginLeft: "10px", color: "red" }} />
        </i>
      </div> */}
    </CardStyled>
  );
};

export default CardUi;
