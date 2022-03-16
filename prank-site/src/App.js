import Login from "./components/login";
import Fishing from "./components/fishing"
import Home from "./components/home"
import * as React from "react";
import { Routes, Route} from "react-router-dom";

function Apps() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/fish" element={<Fishing />} />
      </Routes>
    </div>
  );
}

export default Apps;
