import React from 'react';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({ isOpen: false });
  }

  function handleCardClick(e) {

    setSelectedCard({
      ...selectedCard,
      isOpen: true,
      link: e.link,
    })
  }

  return (

    <div className="root">
      <Header />
      <Main onEditAvatar={handleAvatarClick} onAddPlace={handleAddPlaceClick} onEditProfile={handleEditProfileClick} onClose={closeAllPopups} onCardClick={handleCardClick} />

      <PopupWithForm name='add-card' title='Новое место' id='form-add' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <input type="text" name="name" id="title" className="popup__input popup__input_type_name" minLength="2" maxLength="30" placeholder="Название" required />
        <span className="error-messege" id="error-title"></span>
        <input name="link" type="url" className="popup__input popup__input_type_link-url"
          placeholder="Ссылка на картинку" id="link" required />
        <span className="error-messege" id="error-link"></span>
        <button type="submit" className="button popup__button popup-add-card__button" disabled>+</button>
      </PopupWithForm>

      <PopupWithForm name='avatar' title='Обновить аватар' id='form-avatar' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <input name="link" type="url" className="popup__input popup-avatar_type_link-url"
          placeholder="Ссылка на аватар" id="link" required />
        <span className="error-messege popup-avatar__error-messege" id="error-link"></span>
        <button type="submit" className="button popup__button popup-avatar__button" disabled>Сохранить</button>
      </PopupWithForm>

      <PopupWithForm name='edit-card' title='Редактировать профиль' id='form-edit' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <input type="text" name="name" id="name" className="popup__input popup__input_type_author-name" required minLength="2" maxLength="30" placeholder="Имя" />
        <span className="error-messege" id="error-name"></span>
        <input type="text" name="link" id="info" className="popup__input popup__input_type_info" minLength="2" maxLength="30" required placeholder="О себе" />
        <span className="error-messege" id="error-info"></span>
        <button type="submit" className="button popup__button popup-edit-card__button" disabled>Сохранить</button>
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
