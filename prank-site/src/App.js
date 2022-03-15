import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <div>
      home pageです
    </div>
  );
}

function Profile() {
  return (
    <div>
      profile pageです
    </div>
  );
}

function About() {
  return (
    <div>
      about pageです
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Hello world!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;