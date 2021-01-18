import React from 'react';
import api from '../utils/Api';
import Card from './Card'

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
                {cards.map((cardItem, i) =>
                (
                    <Card card={cardItem} key={cardItem._id} onCardClick={props.onCardClick} />
                )
                )}
            </div>

        </>
    );
}

export default Main;

