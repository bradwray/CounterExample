import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter.js";

// THIS IS A COMMENT. Read all the comments.
// They describe what follows and give instructions.
// BUT Before you start, make a codesandbox account and fork
// this Sandbox. That way you can mess with it.

// This function that returns HTML (aka a "component") is the wrapper for our whole app.
function App() {
  // See the files in the left menu? Open up the one named Counter. It's the implemenation for the Counter Component Below
  return (
    <div>
      <Counter />
    </div>
  );
}

// This code is needed only in the App component.
// It renders all the components into a div in the index.html file.
// Go check out the index.html file in the public folder to the left.
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
