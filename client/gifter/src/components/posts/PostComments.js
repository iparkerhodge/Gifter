import React from "react";
import { Card, CardBody, CardLink } from "reactstrap";
import { Link } from "react-router-dom";

const Comment = ({ comment }) => {
    return (
        <Card>
            <CardBody>
                {comment.message}
                <CardLink>
                    <Link to={`/users/${comment.userProfileId}`}>
                        <small className="text-left px-2">Posted by: {comment.userProfile.name}</small>
                    </Link>
                </CardLink>
            </CardBody>
        </Card>
    );
}

export default Comment