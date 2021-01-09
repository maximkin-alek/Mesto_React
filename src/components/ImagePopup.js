import React from 'react';
import close from "../images/close.svg"
function ImagePopup(props) {
    return (
        <div className={(props.card.isOpen) ? "popup popup-image popup_is-opened" : "popup popup-image"}>
            <div className="popup-image__content">
                <img src={close} alt="закрыть окно" className="popup__close popup-image__close" onClick={props.onClose} />
                <img src={props.card.link} alt="" className="popup-image__picture" />
            </div>
        </div>
    );
}
export default ImagePopup;