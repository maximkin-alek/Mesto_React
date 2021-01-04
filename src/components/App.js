import Header from './Header'
import Main from './Main'
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'

function App() {
  return (

    <div className="root">
      <Header />
      <Main />
      <PopupWithForm name='add-card' title='Новое место' id='form-add'>
        <input type="text" name="name" id="title" className="popup__input popup__input_type_name" minLength="2" maxLength="30" placeholder="Название" required />
        <span className="error-messege" id="error-title"></span>
        <input name="link" type="url" className="popup__input popup__input_type_link-url"
          placeholder="Ссылка на картинку" id="link" required />
        <span className="error-messege" id="error-link"></span>
        <button type="submit" className="button popup__button popup-add-card__button" disabled>+</button>
      </PopupWithForm>

      <PopupWithForm name='avatar' title='Обновить аватар' id='form-avatar'>
        <input name="link" type="url" className="popup__input popup-avatar_type_link-url"
          placeholder="Ссылка на аватар" id="link" required />
        <span className="error-messege popup-avatar__error-messege" id="error-link"></span>
        <button type="submit" className="button popup__button popup-avatar__button" disabled>Сохранить</button>
      </PopupWithForm>

      <PopupWithForm name='edit-card' title='Редактировать профиль' id='form-edit'>
        <input type="text" name="name" id="name" className="popup__input popup__input_type_author-name" required minLength="2" maxLength="30" placeholder="Имя" />
        <span className="error-messege" id="error-name"></span>
        <input type="text" name="link" id="info" className="popup__input popup__input_type_info" minLength="2" maxLength="30" required placeholder="О себе" />
        <span className="error-messege" id="error-info"></span>
        <button type="submit" className="button popup__button popup-edit-card__button" disabled>Сохранить</button>
      </PopupWithForm>
      <ImagePopup />
    </div>
  );
}

export default App;
