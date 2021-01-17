import React from "react";
import "./BotHeader.css";

function BotHeader() {
  return (
    <div className="contact-bot-header px-4">
      <div className="d-flex py-2">
        <div>
          <input type="checkbox" />
        </div>
        <div>Username</div>
        <div>Name</div>
        <div>Email</div>
        <div>Gender</div>
        <div>Payment Method</div>
        <div>Domain Name</div>
      </div>
    </div>
  );
}

export default BotHeader;
