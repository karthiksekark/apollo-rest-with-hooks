import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import "./App.css";

const postQuery = gql`
  query {
    post @rest(type: "Posts", path: "posts/1") {
      title
    }
  }
`;
function App() {
  const { loading, error, data } = useQuery(postQuery);
  if (loading) return "Loading...";
  if (error) return `Error Message ${error.message}`;
  if (data) {
    return (
      <div className="App">
        <h1>Post Detail</h1>
        <p>{data.post.title}</p>
      </div>
    );
  }
}

export default App;
