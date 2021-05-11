export const GET_PROFILE = "GET_PROFILE";
import { db } from "../../constants/firebase/config";

export const getPlayer = (email) => {
    return async (dispatch) => {
        try {
            db.collection("/user-profile")
                .where("email", "==", email + " ")
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        dispatch({
                            type: GET_PROFILE,
                            pid: doc.data().playerID,
                        });
                    });
                })
                .catch((error) => {
                    console.log("Error getting documents: ", error);
                });
        } catch (err) {}
    };
};
