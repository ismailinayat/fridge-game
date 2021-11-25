import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './styles/globals.scss';
import Home from './pages/Home'
import Welcome from './pages/Welcome'
import Game from "./pages/Game";
import Shop from "./pages/Shop";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/welcome" element = {<Welcome/>}/>
        <Route path="/game" element = {<Game/>}/>
        <Route path="/shop" element = {<Shop/>}/>
      </Routes>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
