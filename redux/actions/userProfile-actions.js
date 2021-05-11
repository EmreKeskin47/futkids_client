export const GET_PROFILE = "GET_PROFILE";
import { db } from "../../constants/firebase/config";
import { UserProfile } from "../../models/UserProfile";

export const getPlayer = (email) => {
    return async (dispatch) => {
        try {
            db.collection("/user-profile")
                .where("email", "==", email + " ")
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        let user = new UserProfile(
                            doc.id,
                            doc.data().email,
                            doc.data().image,
                            doc.data().name,
                            doc.data().playerID
                        );
                        dispatch({
                            type: GET_PROFILE,
                            user: user,
                        });
                    });
                })
                .catch((error) => {
                    console.log("Error getting documents: ", error);
                });
        } catch (err) {}
    };
};
