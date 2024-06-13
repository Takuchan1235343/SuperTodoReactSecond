// LinkGoogleAccount.js
import React from "react";
import {linkWithPopup} from "firebase/auth";
import {auth, provider} from "./firebaseConfig";

const LinkGoogleAccount = () => {
    const handleLinkGoogle = async () => {
        const user = auth.currentUser;

        if (user) {
            try {
                const result = await linkWithPopup(user, provider);
                console.log("Google account linked:", result.user);
            } catch (error) {
                console.error("Error linking Google account:", error);
            }
        } else {
            console.log("No user is signed in to link the Google account with.");
        }
    };

    return (
        <div>
            <button onClick={handleLinkGoogle}>Link Google Account</button>
        </div>
    );
};

export default LinkGoogleAccount;
