import React, { useContext, useEffect } from "react";
import { PostContext } from "../providers/PostProvider";
import Post from "./Post";

const PostList = () => {
    const { posts, getAllPosts, results } = useContext(PostContext);

    useEffect(() => {
        getAllPosts()
    }, []);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="cards-column">
                    {
                        (results.length)
                            ? results.map((post) => (
                                <Post key={post.id} post={post} />
                            ))
                            : posts.map((post) => (
                                <Post key={post.id} post={post} />
                            ))
                    }
                </div>
            </div>
        </div>
    );
};

export default PostList;