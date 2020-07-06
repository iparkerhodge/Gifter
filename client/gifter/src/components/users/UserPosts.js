import React, { useContext, useEffect } from "react";
import { PostContext } from "../../providers/PostProvider";
import Post from "../posts/Post";
import { useParams } from "react-router-dom";
import { UserContext } from "../../providers/UserProvider";

const UserPosts = () => {
    const { posts, getPostsByUser } = useContext(PostContext);
    const { users, getUser } = useContext(UserContext)

    const { id } = useParams();

    useEffect(() => {
        getPostsByUser(id)
        getUser(id)
    }, []);

    return (
        <div className="container">
            <h1>{users.name}'s Posts</h1>
            <div className="row justify-content-center">
                <div className="cards-column">
                    {
                        (posts.length)
                            ? posts.map((post) => (
                                <Post key={post.id} post={post} />
                            ))
                            : <div className="alert alert-secondary mt-1" role="alert"> No posts were found.</div>
                    }
                </div>
            </div>
        </div>
    );
};

export default UserPosts;