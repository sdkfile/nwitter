import { authService } from "fbase";
import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { dbService } from "fbase";
import Nweet from "components/Nweet";

const Profile = ({ userObj, refreshUser }) => {
    const history = useHistory();
    const [nweets, setNweets] = useState([]);
    const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
    const onLogOutClick = () => {
        authService.signOut();
        history.push("/");
    };

    const onChange = (event) => {
        const {
            target: { value },
        } = event;
        setNewDisplayName(value);
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        if (userObj.displayName !== newDisplayName) {
            await userObj.updateProfile({ displayName: newDisplayName });
            refreshUser();
        }
    };

    const getMyNweets = async () => {
        dbService
            .collection("nweets")
            .where("creatorId", "==", userObj.uid)
            .orderBy("createdAt", "asc")
            .onSnapshot((snapshot) => {
                const newArray = snapshot.docs.map((document) => ({
                    id: document.id,
                    ...document.data(),
                }));
                setNweets(newArray);
            });
    };
    useEffect(() => {
        getMyNweets();
    });

    return (
        <div className="container">
            <form onSubmit={onSubmit} className="profileForm">
                <input
                    onChange={onChange}
                    type="text"
                    placeholder="Display name"
                    value={newDisplayName}
                    autoFocus
                    className="formInput"
                />
                <input
                    type="submit"
                    value="Update Profile"
                    className="formBtn"
                    style={{
                        marginTop: 10,
                    }}
                />
            </form>
            <div
                className="logoutPart"
            >
                <span
                    className="formBtn cancelBtn logOut"
                    onClick={onLogOutClick}
                >
                    Log Out
                </span>
            </div>
            <div
                style={{
                    marginTop: 30,
                }}
            >
                {nweets.map((nweet) => (
                    <Nweet
                        key={nweet.id}
                        nweetObj={nweet}
                        isOwner={nweet.creatorId === userObj.uid}
                    />
                ))}
            </div>
        </div>
    );
};

export default Profile;




