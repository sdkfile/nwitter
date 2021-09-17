import { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";

function App() {
    const [init, setInit] = useState(false);
    const [userObj, setUserObj] = useState(null);

    useEffect(() => {
        authService.onAuthStateChanged((user) => {
            if (user) {
                setUserObj({
                    uid: user.uid,
                    displayName: user.displayName,
                    updateProfile: (args) => user.updateProfile(args),
                });
            } else {
                setUserObj(false);
            }
            setInit(true);
        });
    }, []);

    const refreshUser = () => {
        setUserObj(authService.currentUser);
        const user = authService.currentUser;
        setUserObj({
            uid: user.uid,
            displayName: user.displayName,
            updateProfile: (args => user.updateProfile(args)),
        });
    };

    return (
        <>
            {init ? (
                <AppRouter
                    isLoggedIn={Boolean(userObj)}
                    userObj={userObj}
                    refreshUser={refreshUser}
                />
            ) : ("initializing..."
            )}
        </>
    );
}

export default App;
