import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";
import PopupWithForm from "./PopupWithForm .jsx";
import "../index.css";
import { useState } from "react";
import ImagePopup from "./ImagePopup.jsx";

function App() {

const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
const [isImagePopupOpen, setImagePopupOpen] = useState(false);
const [selectedCard, setSelectedCard] = useState({});
const [isConfirmationPopupOpen, setConfirmationPopupOpen] = useState(false);

function handleEditProfileClick() {
  setEditProfilePopupOpen(true)
}

function handleEditAvatarClick() {
  setEditAvatarPopupOpen(true)
}

function handleAddPlaceClick() {
  setAddPlacePopupOpen(true)
}

function handleEditProfileClick() {
  setEditProfilePopupOpen(true)
}

function handleCardClick(card) {
  // setSelectedCard({name,link})
  setSelectedCard(card);
  setImagePopupOpen(true);
}


function closeAllPopups() {
  setEditProfilePopupOpen(false);
  setEditAvatarPopupOpen(false);
  setAddPlacePopupOpen(false);
  setImagePopupOpen(false);
  setConfirmationPopupOpen(false);
  // setSelectedCard(false)
};

  return (
    <>
        <Header />
        <Main 
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardclick={handleCardClick}
        />
        <Footer />
        
        {/* Попап */}
        <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        buttonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}>
           <input
                type="text"
                name="name"
                placeholder="Ваше имя"
                className="popup__input popup__input_type_name"
                minLength={2}
                maxLength={40}
                required=""
                id="input-name"
              />
              <span className="popup__error" id="input-name-error" />
              <input
                type="text"
                name="job"
                placeholder="Сфера деятельности"
                className="popup__input popup__input_type_about"
                minLength={3}
                maxLength={200}
                required=""
                id="input-job"
              />
              <span className="popup__error" id="input-job-error" />
        </PopupWithForm>
        
        <PopupWithForm
        name="addcards"
        title="Новое место"
        buttonText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}>
           <input
                type="text"
                name="name"
                placeholder="Название"
                className="popup__input popup__input_type_name"
                minLength={2}
                maxLength={30}
                required=""
                id="input-mesto"
              />
              <span className="popup__error" id="input-mesto-error" />
              <input
                type="url"
                name="link"
                placeholder="Ссылка на картинку"
                className="popup__input popup__input_type_about"
                required=""
                id="input-url"
              />
              <span className="popup__error" id="input-url-error" />

        </PopupWithForm>
      
      <ImagePopup 
      card={selectedCard}
      isOpen={isImagePopupOpen}
      onClose={closeAllPopups}
      />
       
        <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        buttonText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}>
           <input
                type="url"
                name="link"
                placeholder="Ссылка на аватар"
                className="popup__input popup__input_type_about"
                required=""
                id="input-url-avatar"
              />
              <span className="popup__error" id="input-url-avatar-error" />
        </PopupWithForm>

        <PopupWithForm
        name="delete"
        title="Вы уверены?"
        buttonText="Да"
        isOpen={isConfirmationPopupOpen}
        onClose={closeAllPopups}>
          
        </PopupWithForm>

        {/* <div className="popup popup_type_delete">
          <div className="popup__contener">
            <button
              className="popup__close"
              type="button"
              aria-label="Закрыть попап"
            />
            <div className="popup__content" name="popup">
              <h2 className="popup__title">Вы уверены?</h2>
              <button className="popup__save" type="submit">
                Да
              </button>
            </div>
          </div>
        </div> */}
    </>
  );
}

export default App;
