export const FETCH_POSTS = "FETCH_POSTS";
export const CREATE_POSTS = "CREATE_POSTS";
export const DELETE_POST = "DELETE_POST";
export const UPDATE_POST = "UPDATE_POST";
import { db, storage } from "../../constants/firebase/config";
import { Vote } from "../../models/Vote";
import * as firebase from "firebase";

const email = firebase.auth().currentUser.email;

// export const fetchVotes = () => {
//   return async (dispatch) => {
//     try {
//       const response = db.collection("oy").where("email", "==" , email + " ").get().then(())
//       const data = await response.get();
//       data.docs.forEach((item) => {});

//       dispatch({
//         type: FETCH_POSTS,
//         posts: postArray,
//       });
//     } catch (err) {}
//   };
// };

export const updateVotes = (position) => {
  return async (dispatch) => {
    try {
      db.collection("oy")
        .where("email", "==", email + " ")
        .set({
          email: email,
          att: position == "ATT",
          mid: position == "MID",
          def: position == "DEF",
          gk: (position = "GK"),
        });
      dispatch({
        type: UPDATE_POST,
      });
    } catch (err) {}
  };
};

//export const initializeVotes = (title, desc, image) => {
//     return async (dispatch) => {
//         try {
//             const response = db.collection("/haber");
//             const data = await response.add({
//                 desc: desc,
//                 image: image,
//                 title: title,
//                 date: new Date().toDateString(),
//             });
//             dispatch({
//                 type: CREATE_POSTS,
//             });
//         } catch (err) {}
//     };
// };
