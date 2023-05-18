import React from "react";
import Card from "./Card";
import Data from "./Data";

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <Card Data={Data} />
      </div>
    </div>
  );
};

export default App;
