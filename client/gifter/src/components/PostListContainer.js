import React, { useContext, useEffect, useState } from "react";
import { PostContext } from "../providers/PostProvider";
import Post from "./Post";

const PostListContainer = () => {
    const { posts, getAllPosts } = useContext(PostContext);

    useEffect(() => {
        getAllPosts()
    }, []);

    debugger
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="cards-column">
                    {
                        posts.map((post) => (
                            <Post key={post.id} post={post} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default PostListContainer;