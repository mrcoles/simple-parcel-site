import React from "react";
import { render } from "react-dom";
import { Button } from "rebass";

const App = () => {
  return (
    <div>
      Hi
      <br />
      <br />
      <Button
        onClick={(evt) => {
          console.log("CLICKED!", evt);
        }}
      >
        Click me
      </Button>
    </div>
  );
};

render(<App />, document.getElementById("root"));
