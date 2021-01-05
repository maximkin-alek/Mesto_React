

function Main(props) {


    return (
        <>
            <div className="profile root__section">
                <div className="user-info">
                    <div className="user-info__photo" onClick={props.onEditAvatar} ></div>
                    <div className="user-info__data">
                        <h1 className="user-info__name">Alex</h1>
                        <p className="user-info__job">Developer</p>
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