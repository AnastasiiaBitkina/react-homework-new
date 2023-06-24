import React from "react";
import "../styles/ticketcards.css";

const TicketCard: React.FC = () => {
  return (
    <div className="ticket-card">
      <div className="ticket-card-main">
        <label></label>
        <label></label>
      </div>
      <div className="ticket_buttons">
        <button id="minus"></button>
        <label id="quantity"></label>
        <button id="plus"></button>
      </div>
    </div>
  );
};

export default TicketCard;