import React, { useState } from "react";
import "./Contacts.css";

function ContactsList({ contacts, loading }) {
  return (
    <div className="px-4">
      {contacts.map((contact, index) => {
        return (
          <div className="contact bg-white d-flex mb-3 py-3" key={index}>
            <div scope="row">
              <input type="checkbox" />
            </div>
            <div>{contact.UserName}</div>
            <div>{`${contact.FirstName} ${contact.LastName}`}</div>
            <div>{contact.Email}</div>
            <div>{contact.Gender}</div>
            <div>{contact.PaymentMethod}</div>
            <div>{contact.DomainName}</div>
          </div>
        );
      })}
    </div>
  );
}

export default ContactsList;
