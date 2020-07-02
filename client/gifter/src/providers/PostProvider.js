import React, { useState } from "react";

export const PostContext = React.createContext();

export const PostProvider = (props) => {
    const [posts, setPosts] = useState([]);
    const [results, set] = useState([])

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
        return fetch(`api/post/search?q=${q}`)
            .then((res) => res.json())
            .then(set)
    }

    return (
        <PostContext.Provider value={{ posts, getAllPosts, addPost, searchPosts, results }}>
            {props.children}
        </PostContext.Provider>
    );
};