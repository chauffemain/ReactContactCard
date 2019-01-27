import React from "react";

const ContactCard = props => (
  <div className="contact-card">
    <img src={props.imgUrl} />
    <h3>{props.name}</h3>
    <p>Phone: {props.phone}</p>
    <p>{props.email}</p>
  </div>
);
export default ContactCard;
