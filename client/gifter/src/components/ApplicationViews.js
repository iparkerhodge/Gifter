import React from "react";
import { Switch, Route } from "react-router-dom";
import PostList from "./posts/PostList";
import PostForm from "./posts/PostForm";
import PostDetails from "./posts/PostDetails";
import UserPosts from "./users/UserPosts";

const ApplicationViews = () => {
    return (
        <Switch>
            <Route path="/posts/add">
                <PostForm />
            </Route>

            <Route path="/posts/:id">
                <PostDetails />
            </Route>

            <Route path="/users/:id">
                <UserPosts />
            </Route>

            <Route path="/" exact>
                <PostList />
            </Route>
        </Switch>
    );
};

export default ApplicationViews;