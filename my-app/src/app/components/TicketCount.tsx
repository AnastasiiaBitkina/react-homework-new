import React from "react";
import { Plus } from "../components/MySVGComponent";
import { Minus } from "../components/MySVGComponent";
import { MinusBright } from "../components/MySVGComponent";
import "../styles/ticket-count.css"

const TicketCount: React.FC<{
  movieId: string;
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}> = ({ movieId, count, onIncrement, onDecrement }) => {
  return (
    <div className="ticket-count">
      {count !== 0 ? (
        <div className="minus" onClick={(e) => { e.stopPropagation(); onDecrement(); }}>
          <MinusBright id="minus-bright" />
        </div>
      ) : (
        <div className="minus" onClick={(e) => { e.stopPropagation(); onDecrement(); }}>
          <Minus id="minus" />
        </div>
      )}
      <span className="count">{count}</span>
      <div className="plus" onClick={(e) => { e.stopPropagation(); onIncrement(); }}>
        <Plus id="plus" />
      </div>
    </div>
  );
};

export default TicketCount;
