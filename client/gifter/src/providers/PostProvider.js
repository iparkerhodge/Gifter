import React, { useState } from "react";

export const PostContext = React.createContext();

export const PostProvider = (props) => {
    const [posts, setPosts] = useState([]);

    const getAllPosts = () => {
        return fetch("api/post")
            .then((res) => res.json())
            .then(setPosts);
    };

    const addPost = (post) => {
        return fetch("api/post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(post),
        });
    };

    const searchPosts = (q) => {
        if (!q) {
            getAllPosts()
            return
        }
        return fetch(`api/post/search?q=${q}`)
            .then((res) => res.json())
            .then(setPosts)
    }

    const getPost = (id) => {
        return fetch(`/api/post/${id}`).then((res) => res.json());
    };

    const getPostsByUser = (id) => {
        return fetch(`/api/post/getbyuser/${id}`)
            .then((res) => res.json())
            .then(setPosts);
    };

    return (
        <PostContext.Provider value={{
            posts, getAllPosts, addPost,
            searchPosts, getPost, getPostsByUser
        }}>
            {props.children}
        </PostContext.Provider>
    );
};