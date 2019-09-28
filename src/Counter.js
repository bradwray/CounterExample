import React, { useState } from "react";
import styled from "styled-components";

// This is a styled div I named container. Below it is just regular CSS.
// It is used to style the grey box around the counter
// Change some properties and see what happens to the preview --->.
const Container = styled.div`
  border-radius: 3px;
  width: 100px;
  height: 100px;
  margin: 0 auto;
  background-color: #ddd;
  background-clip: border-box;
  border: none;
  border-radius: 0.5rem;
  border-color: #c4c4c4;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px hsla(0, 0%, 76.9%, 0.4);
  margin-top: 20px;
`;

// Here is a styled div I named Count.
// It is used to style the number in the counter.
// Change some properties and see what happens.
const Count = styled.div`
  color: #337067;
  font-size: 55px;
  display: flex;
  justify-content: center;
  width: 100%;
`;

// And a styled button tag I named Button.
// It styles the "Press Me" button
// Change some properties and see what happens.
const Button = styled.button`
  background: #337067;
  border-radius: 3px;
  color: white;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
`;

// This Counter function is a component that is exported from here and
// imported into index.js to be rendered inside the <App/> component.
export default function Counter() {
  // Next I make a changeable "state" variable named num.
  // the function setNum is how you change it. I start it out at 0;
  const [num, setNum] = useState(0);

  // The num variable setNum are used down below
  // within the tags that I made. Any JS in the HTML is wrapped in curly brackets.
  return (
    <Container>
      <Count>{num}</Count>
      <Button onClick={() => setNum(num + 1)}>Press Me</Button>
    </Container>
  );
}

// Now that you've read this whole thing and tweaked it...
// Go back to index.js and copy and paste a few more <Counter/> components inside App.
// It'll give you an idea of how awesome and reusable components are.
