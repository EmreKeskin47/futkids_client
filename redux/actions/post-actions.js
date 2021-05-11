export const FETCH_POSTS = "FETCH_POSTS";
export const CREATE_POSTS = "CREATE_POSTS";
export const DELETE_POST = "DELETE_POST";
export const UPDATE_POST = "UPDATE_POST";
import { db, storage } from "../../constants/firebase/config";
import { Post } from "../../models/Post";

export const fetchPosts = () => {
    return async (dispatch) => {
        try {
            let postArray = [];
            const response = db.collection("haber");
            const data = await response.get();
            data.docs.forEach((item) => {
                postArray.push(
                    new Post(
                        item.id,
                        item.data().desc,
                        item.data().image,
                        item.data().title,
                        item.data().date
                    )
                );
            });

            dispatch({
                type: FETCH_POSTS,
                posts: postArray,
            });
        } catch (err) {}
    };
};

export const createPost = (title, desc, image) => {
    return async (dispatch) => {
        try {
            const response = db.collection("/haber");
            const data = await response.add({
                desc: desc,
                image: image,
                title: title,
                date: new Date().toDateString(),
            });
            dispatch({
                type: CREATE_POSTS,
            });
        } catch (err) {}
    };
};

export const deletePost = (id) => {
    return async (dispatch) => {
        try {
            db.collection("/haber")
                .doc(id)
                .delete()
                .then(() => {
                    //console.log("Document successfully deleted!");
                })
                .catch((error) => {
                    console.error("Error removing document: ", error);
                });
            dispatch({
                type: DELETE_POST,
                id: id,
            });
        } catch (err) {}
    };
};

export const updatePost = (newPost) => {
    return async (dispatch) => {
        try {
            db.collection("haber").doc(newPost.id).set({
                desc: newPost.description,
                image: newPost.image,
                title: newPost.title,
                date: new Date().toDateString(),
            });

            dispatch({
                type: UPDATE_POST,
            });
        } catch (err) {}
    };
};

export const deleteImageFromStorage = (url) => {
    //1.
    let pictureRef = storage.refFromURL(url);
    //2.
    pictureRef
        .delete()
        .then(() => {
            //3.
            alert("Picture is deleted successfully!");
        })
        .catch((err) => {
            console.log(err);
        });
};
