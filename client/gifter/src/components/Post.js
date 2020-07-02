import React, { useState } from "react";
import { Card, CardImg, CardBody, Button, Collapse } from "reactstrap";
import Comment from "./PostComments";

const Post = ({ post }) => {
    const [open, set] = useState(false)
    const toggle = () => set(!open)

    return (
        <Card className="m-4">
            <p className="text-left px-2">Posted by: {post.userProfile.name}</p>
            <CardImg top src={post.imageUrl} alt={post.title} />
            <CardBody>
                <p>
                    <strong>{post.title}</strong>
                </p>
                <p>{post.caption}</p>
            </CardBody>
            <Button onClick={toggle}>Comments ({post.comments.length})</Button>
            <Collapse isOpen={open}>
                {
                    post.comments.map((comment) => (
                        <Comment comment={comment} />
                    ))
                }
            </Collapse>
        </Card>
    );
};

export default Post;