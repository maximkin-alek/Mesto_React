function Main() {

    function handleEditAvatarClick() {
        const popupEdit = document.querySelector('.popup-edit-card')
    }

    return (
        <>
            <div className="profile root__section">
                <div className="user-info">
                    <div className="user-info__photo"></div>
                    <div className="user-info__data">
                        <h1 className="user-info__name">Alex</h1>
                        <p className="user-info__job">Developer</p>
                        <button className="user-info__edit-button">Edit</button>
                    </div>
                    <button className="button user-info__button">+</button>
                </div>
            </div>
            <div className="places-list root__section">
            </div>

            <div className="popup popup-add-card">
                <div className="popup__content">
                    <img src="<%=require('./images/close.svg')%>" alt="" className="popup__close popup-add-card__close" />
                    <h3 className="popup__title">Новое место</h3>
                    <form className="popup__form" name="new" id="form-add">
                        <input type="text" name="name" id="title" className="popup__input popup__input_type_name" minlength="2" maxlength="30" placeholder="Название" required />
                        <span className="error-messege" id="error-title"></span>
                        <input name="link" type="url" className="popup__input popup__input_type_link-url"
                            placeholder="Ссылка на картинку" id="link" required />
                        <span className="error-messege" id="error-link"></span>
                        <button type="submit" className="button popup__button popup-add-card__button" disabled>+</button>
                    </form>
                </div>
            </div>

            <div className="popup popup-edit-card">
                <div className="popup__content">
                    <img src="<%=require('./images/close.svg')%>" alt="" className="popup__close popup-edit-card__close" />
                    <h3 className="popup__title">Редактировать профиль</h3>
                    <form className="popup__form" name="new" id="form-edit">
                        <input type="text" name="name" id="name" className="popup__input popup__input_type_author-name" required minlength="2" maxlength="30" placeholder="Имя" />
                        <span className="error-messege" id="error-name"></span>
                        <input type="text" name="link" id="info" className="popup__input popup__input_type_info" minlength="2" maxlength="30" required placeholder="О себе" />
                        <span className="error-messege" id="error-info"></span>
                        <button type="submit" className="button popup__button popup-edit-card__button" disabled>Сохранить</button>
                    </form>
                </div>
            </div>

            <div className="popup popup-image">
                <div className="popup-image__content">
                    <img src="<%=require('./images/close.svg')%>" alt="" className="popup__close popup-image__close" />
                    <img src="" alt="" className="popup-image__picture" />
                </div>
            </div>

            <div className="popup popup-avatar">
                <div className="popup__content">
                    <img src="<%=require('./images/close.svg')%>" alt="" className="popup__close popup-avatar__close" />
                    <h3 className="popup__title">Обновить аватар</h3>
                    <form className="popup__form" name="new" id="form-avatar">
                        <input name="link" type="url" className="popup__input popup-avatar_type_link-url"
                            placeholder="Ссылка на аватар" id="link" required />
                        <span className="error-messege popup-avatar__error-messege" id="error-link"></span>
                        <button type="submit" className="button popup__button popup-avatar__button" disabled>Сохранить</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Main;