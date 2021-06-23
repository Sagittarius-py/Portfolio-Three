import React from "react";

import Horizontal from "./contact/horizontal";
import Vertical from "./contact/vertical";

function Contact(props) {
  return (
    <React.Fragment>
      <div className="Contact content">
        <div className="title contactTitle">
          <h1 id="titleLabel">Contact</h1>
        </div>
        {props.width >= 700 ? <Horizontal /> : <Vertical />}
      </div>
    </React.Fragment>
  );
}

export default Contact;
