import React from 'react';
function Card(props) {

    function handleClick() {
        props.onCardClick(props.card);
    }

    return (
        <div className="place-card">
            <div onClick={handleClick} className="place-card__image" style={{ backgroundImage: `url(${props.card.link})` }}>
                <button className={(props.card.owner._id !== "4a0ea2320e1b1a940a6b0942") ? "place-card__delete-icon  place-card__delete-icon_hidden" : "place-card__delete-icon"}></button>
            </div>
            <div className="place-card__description">
                <h3 className="place-card__name">{props.card.name}</h3>
                <div className="place-card__like-group">
                    <button className="place-card__like-icon place-card__like-icon_liked">
                    </button>
                    <p className="place-card__like-counter">{props.card.likes.length}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;