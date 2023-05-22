import React, { Component } from "react";
import { Route, Link, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";

import Add from "./components/add-clip.component";
import Chome from "./components/clip-list.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
          
            <li>
              <Link to={"/home"}>home</Link>
            </li>
            <li>
              <Link to={"/addimage"}>Add image</Link>
            </li>
           
          </ul>
        </nav>

        <div className="container-body">
          <Routes>
            <Route exact path="/home" element={<Chome />} />
            <Route exact path="/addimage" element={<Add />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App
