import React from "react";
import { Router, Route } from "react-router-dom";

import "assets/scss/style.scss";
import LandingPage from "pages/LandingPage";

function App() {
  return (
    <div className="App">
      {/* THIS RECT APPPPPPPP */}
      <Router>
          <Route path="/" component={LandingPage}></Route>
      </Router>
    </div>
  );
}

export default App;
