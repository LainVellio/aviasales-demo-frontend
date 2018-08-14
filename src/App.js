import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./Fonts/index.css";

import Home from "./Home";
import Search from "./Search";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path="/" exact component={Search} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
