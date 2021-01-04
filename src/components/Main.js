

function Main() {

    function handleAvatarClick() {
        const popupAvatar = document.querySelector('.popup-avatar');
        popupAvatar.classList.add('popup_is-opened');
    }

    function handleEditProfileClick() {
        const popupEdit = document.querySelector('.popup-edit-card');
        popupEdit.classList.add('popup_is-opened');
    }

    function handleAddPlaceClick() {
        const popupAdd = document.querySelector('.popup-add-card');
        popupAdd.classList.add('popup_is-opened');
    }

    return (
        <>
            <div className="profile root__section">
                <div className="user-info">
                    <div className="user-info__photo" onClick={handleAvatarClick} ></div>
                    <div className="user-info__data">
                        <h1 className="user-info__name">Alex</h1>
                        <p className="user-info__job">Developer</p>
                        <button className="user-info__edit-button" onClick={handleEditProfileClick} >Edit</button>
                    </div>
                    <button className="button user-info__button" onClick={handleAddPlaceClick} >+</button>
                </div>
            </div>
            <div className="places-list root__section">
            </div>
           
            

            

            
        </>
    );
}

export default Main;