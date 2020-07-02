import React from 'react'
import Post from "./Post";

const PostList = ({ list }) => {

    console.log(list)
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="cards-column">
                    {
                        (list.length)
                            ? list.map((post) => (
                                <Post key={post.id} post={post} />
                            ))
                            : <div className="alert alert-secondary mt-1" role="alert"> No posts were found.</div>
                    }
                </div>
            </div>
        </div>
    );
}

export default PostList