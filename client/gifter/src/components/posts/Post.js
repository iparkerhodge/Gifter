import React, { useState, useContext, useRef } from "react"
import { Card, CardImg, CardBody, Button, Collapse, Input, InputGroup, InputGroupAddon } from "reactstrap"
import Comment from "./PostComments"
import { Link } from "react-router-dom"
import { PostContext } from "../../providers/PostProvider";

const Post = ({ post }) => {
    const { addCommentToPost } = useContext(PostContext)

    const [open, set] = useState(false)
    const toggle = () => set(!open)

    const text = useRef()

    const handleSubmit = () => {
        const comment = {
            userProfileId: 2,
            postId: post.id,
            message: text.current.value
        }

        addCommentToPost(comment)
    }

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
                <InputGroup className='mt-1 mb-1 mr-1'>
                    <Input placeholder='Add Comment' innerRef={text} />
                    <InputGroupAddon addonType='append' className>
                        <Button onClick={handleSubmit}>+</Button>
                    </InputGroupAddon>
                </InputGroup>
            </Collapse>
        </Card>
    );
};

export default Post;