import React from 'react';
import api from '../utils/Api';

function Main(props) {

    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');

    React.useEffect(() => {
        api.getUserData()
            .then((data) => {
                setUserName(data.name);
                setUserDescription(data.about);
                setUserAvatar(data.avatar);
            })
    }, [])

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
            </div>

        </>
    );
}

export default Main;