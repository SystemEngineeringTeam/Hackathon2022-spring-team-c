import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import money from "./static/money.png";

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
      <img src={money} alt="金" height="250px"/>
      {/* profile pageです */}
      <h1>儲ける方法</h1>
      <p>何もせずに月300万稼ぐ方法があります。</p>
      <p>そんな夢のような方法をお教えします。あなたも億万長者になりましょう。</p>
      <button>もっと詳しく</button>
      <div id="overlay">
        <div id="content">
          <p>これがモーダルウィンドウです</p>
          <p><button>close</button></p>
        </div>
      </div>
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