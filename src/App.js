import React from "react";
import Home from "./Home";
import Grid from "./Grid";

import {BrowserRouter, Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter><Route exact path="/" component={Home}/>
    <Route path="/grid" component={Grid}/></BrowserRouter>
  );
}

export default App;
