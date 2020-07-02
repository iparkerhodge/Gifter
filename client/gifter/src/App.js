import React from "react";
import "./App.css";
import { PostProvider } from "./providers/PostProvider";
import AddPostForm from "./components/PostForm";
import SearchPosts from "./components/SearchPost";
import PostListContainer from "./components/PostListContainer";

function App() {
  return (
    <div className="App">
      <PostProvider>
        <SearchPosts />
        <AddPostForm />
        <PostListContainer />
      </PostProvider>
    </div>
  );
}

export default App;