import React from "react";
import "./App.css";
import { PostProvider } from "./providers/PostProvider";
import PostList from "./components/PostList";
import AddPostForm from "./components/PostForm";

function App() {
  return (
    <div className="App">
      <PostProvider>
        <AddPostForm />
        <PostList />
      </PostProvider>
    </div>
  );
}

export default App;