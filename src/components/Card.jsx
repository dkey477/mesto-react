import React from "react";

export default function Card({ card, onCardclick }) {
  
    function handleClick() {
    onCardclick(card);
  }

  return (
    <li className="element">
      <button
        className="element__basket"
        type="button"
        aria-label="Удалить место"
      />
      <img className="element__image" 
      src={card.link} 
      alt={card.sname} 
      onClick={handleClick}
      />
      <div className="element__caption">
        <h2 className="element__text">{card.name}</h2>
        <div className="element__icon-check">
          <button
            className="element__icon"
            type="button"
            aria-label="Установка лайка"
          />
          <span className="element__icon-quantity">{card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}
