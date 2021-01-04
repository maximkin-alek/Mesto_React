import close from "../images/close.svg"
function ImagePopup() {
    return (
        <div className="popup popup-image">
            <div className="popup-image__content">
                <img src={close} alt="" className="popup__close popup-image__close" />
                <img src="" alt="" className="popup-image__picture" />
            </div>
        </div>
    );
}
export default ImagePopup;