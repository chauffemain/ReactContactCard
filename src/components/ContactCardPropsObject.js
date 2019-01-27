import React from "react";

const ContactCardPropsObject = props => (
  <div className="contact-card">
    <img src={props.contact.imgUrl} />
    <h3>{props.contact.name}</h3>
    <p>Phone: {props.contact.phone}</p>
    <p>{props.contact.email}</p>
  </div>
);

export default ContactCardPropsObject;
