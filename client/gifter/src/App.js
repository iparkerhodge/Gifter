import React from "react";
import "./App.css";
import { PostProvider } from "./providers/PostProvider";
import PostList from "./components/PostList";
import AddPostForm from "./components/PostForm";
import SearchPosts from "./components/SearchPost";

function App() {
  return (
    <div className="App">
      <PostProvider>
        <SearchPosts />
        <AddPostForm />
        <PostList />
      </PostProvider>
    </div>
  );
}

export default App;