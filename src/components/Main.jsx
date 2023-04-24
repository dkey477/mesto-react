import React, { useState, useEffect } from "react";
import { api } from "../utils/api.js";
import Card from "./Card.jsx";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardclick }) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, serCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getInitialCards(), api.getUserInfo()])
      .then(([card, user]) => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
        serCards(card);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <main>
        <section className="profile">
          <button
            className="profile__button-image"
            type="button"
            aria-label="Изменить аватар"
            onClick={onEditAvatar}
          >
            <img className="profile__image" src={userAvatar} alt={userName} />
          </button>
          <div>
            <div className="profile__content">
              <h1 className="profile__title">{userName}</h1>
              <button
                className="profile__popup-open"
                type="button"
                aria-label="Изменить профиль"
                onClick={onEditProfile}
              />
            </div>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
          <button
            className="profile__rectangle"
            type="button"
            aria-label="Добавить место"
            onClick={onAddPlace}
          />
        </section>
        <section>
          <ul className="elements">
            {cards.map((card)=> (
              <Card card={card} onCardclick={onCardclick} key={card._id} />
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export default Main;
