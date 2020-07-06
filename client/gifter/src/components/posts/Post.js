import React, { useState } from "react"
import { Card, CardImg, CardBody, Button, Collapse } from "reactstrap"
import Comment from "./PostComments"
import { Link } from "react-router-dom"

const Post = ({ post }) => {
    const [open, set] = useState(false)
    const toggle = () => set(!open)

    return (
        <Card className="m-4">
            <Link to={`/users/${post.userProfileId}`}>
                <p className="text-left px-2">Posted by: {post.userProfile.name}</p>
            </Link>
            <CardImg top src={post.imageUrl} alt={post.title} />
            <CardBody>
                <Link to={`/posts/${post.id}`}>
                    <strong>{post.title}</strong>
                </Link>
                <p>{post.caption}</p>
            </CardBody>
            <Button onClick={toggle}>Comments ({post.comments.length})</Button>
            <Collapse isOpen={open}>
                {
                    post.comments.map((comment) => (
                        <Comment key={comment.id} comment={comment} />
                    ))
                }
            </Collapse>
        </Card>
    );
};

export default Post;