import React from "react";
import { Card, CardBody, CardText } from "reactstrap";
import { Link } from "react-router-dom";

const Comment = ({ comment }) => {
    return (
        <Card>
            <CardBody>
                {comment.message}
                <CardText>
                    <Link to={`/users/${comment.userProfileId}`}>
                        <small className="text-left px-2">Posted by: {comment.userProfile.name}</small>
                    </Link>
                </CardText>
            </CardBody>
        </Card>
    );
}

export default Comment