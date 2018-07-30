import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./Fonts/index.css";

import Home from "./Home";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path="/" exact component={Home} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
