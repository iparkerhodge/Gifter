import React from "react";
import { Card, CardBody, CardLink } from "reactstrap";
import { Link } from "react-router-dom";

const Comment = ({ comment }) => {
    return (
        <Card className='text-left'>
            <CardBody>
                {comment.message}<br />
                <CardLink>
                    <Link to={`/users/${comment.userProfileId}`}>
                        <small className="text-left px-2">{comment.userProfile.name}</small>
                    </Link>
                </CardLink>
            </CardBody>
        </Card>
    );
}

export default Comment