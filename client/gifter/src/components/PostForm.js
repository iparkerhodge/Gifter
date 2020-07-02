import React, { useRef, useContext } from 'react'
import { Form, FormGroup, Input, Row, FormText, Button } from 'reactstrap'
import { PostContext } from "../providers/PostProvider";

const AddPostForm = () => {
    const { addPost } = useContext(PostContext)

    const Title = useRef()
    const ImageUrl = useRef()
    const Caption = useRef()

    const handleSubmit = () => {
        const Post = {
            Title: Title.current.value,
            ImageUrl: ImageUrl.current.value,
            Caption: Caption.current.value,
            DateCreated: new Date(),
            UserProfileId: 2
        }
        addPost(Post)
    }

    return (
        <div className="container border pl-5 pr-5 mt-2 pb-1">
            <Form>
                <FormText className='h4'>Add a Post</FormText>
                <Row className='row'>
                    <FormGroup className='row col mr-1'>
                        <Input type='text' name='Title' id='postTitle' innerRef={Title}
                            placeholder='Title' className='form-control form-control-sm'></Input>
                    </FormGroup>
                    <FormGroup className='row col'>
                        <Input type='text' name='ImageUrl' id='postImageUrl' innerRef={ImageUrl}
                            placeholder='ImageUrl' className='form-control form-control-sm'></Input>
                    </FormGroup>
                </Row>
                <FormGroup className='row'>
                    <Input type='text' name='Caption' id='postCaption' innerRef={Caption}
                        placeholder='Caption' className='form-control form-control-sm'></Input>
                </FormGroup>
                <Button onClick={handleSubmit}>Submit</Button>
            </Form>
        </div>
    )
}

export default AddPostForm