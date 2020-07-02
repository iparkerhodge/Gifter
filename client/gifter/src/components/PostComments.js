import React from "react";
import { Card, CardBody, CardText } from "reactstrap";

const Comment = ({ comment }) => {
    return (
        <Card>
            <CardBody>
                {comment.message}
                <CardText>
                    <small className="text-muted">Posted by {comment.userProfile.name}</small>
                </CardText>
            </CardBody>
        </Card>
    );
}

export default Comment