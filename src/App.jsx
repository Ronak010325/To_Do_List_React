import React from "react";
import "./App.css";
import Heading from "./components/heading";
import Content from "./components/content";

function App() {
  return (
    <div className="container">
      <Heading title="To-Do List" />
      <Content />
    </div>
  )
}

export default App;