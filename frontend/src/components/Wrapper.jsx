import React from "react";

import Header from "./Header";
function Wrapper({ children }) {
  return (
    <div style={{paddingBottom : "200px"}}>
      <div>
        <Header />
      </div>
      <br />
      <br />
      <br />
      <div style={{ fontFamily : "Roboto"}}>{children}</div>
    </div>
  );
}
// media.allphone1}{
  //   padding-bottom : 200px;
  // }
export default Wrapper;
