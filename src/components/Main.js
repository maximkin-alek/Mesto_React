import React from 'react';
import api from '../utils/Api';

function Main(props) {

    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');

    const [cards, setCards] = React.useState([]);



    React.useEffect(() => {
        api.getCards()
            .then((data) => {
                setCards(data);
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            })



    }, [])

    React.useEffect(() => {
        api.getUserData()
            .then((data) => {
                setUserName(data.name);
                setUserDescription(data.about);
                setUserAvatar(data.avatar);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);



    return (
        <>
            <div className="profile root__section">
                <div className="user-info">
                    <div style={{ backgroundImage: `url(${userAvatar})` }} className="user-info__photo" onClick={props.onEditAvatar} ></div>
                    <div className="user-info__data">
                        <h1 className="user-info__name">{userName}</h1>
                        <p className="user-info__job">{userDescription}</p>
                        <button className="user-info__edit-button" onClick={props.onEditProfile} >Edit</button>
                    </div>
                    <button className="button user-info__button" onClick={props.onAddPlace} >+</button>
                </div>
            </div>
            <div className="places-list root__section">
                {cards.map((card, i) => 
                    (
                        <div className="place-card" key={card._id}>
                            <div className="place-card__image" style={{ backgroundImage: `url(${card.link})` }}>
                                // настроить отображение иконки корзины
                                <button  className={ "place-card__delete-icon  place-card__delete-icon_hidden"}></button>
                            </div>
                            <div className="place-card__description">
                                <h3 className="place-card__name">{card.name}</h3>
                                <div className="place-card__like-group">
                                    <button className="place-card__like-icon place-card__like-icon_liked">
                                    </button>
                                    <p className="place-card__like-counter">{card.likes.length}</p>
                                </div>
                            </div>
                        </div>
                    )
                )}
            </div>

        </>
    );
}

export default Main;

