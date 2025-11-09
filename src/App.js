import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import DynamicRouting from "./DynamicRouting";

function App() {
  return (
    <Router>
      <DynamicRouting />
    </Router>
  );
}

export default App;
