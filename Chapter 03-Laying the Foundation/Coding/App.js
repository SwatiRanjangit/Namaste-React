// # Chapter 03 - Laying the Foundation.

import { React, createElement as ce } from "react";
import React from "react";
import ReactDOM from "react-dom/client";

//Create Header Element like navbar using createElement.
/* <div class = "header">
    <h1>Title</h1>
    <ul>
        <li>Home</li>
        <li>About us</li>
    </ul>

</div> */

//  react.CreateElement => Object => HTML(DOM)
// const heading = ce(
//   "div",
//   {
//     className: "header",
//     key: "header",
//   },
//   [
//     ce(
//       "h1",
//       {
//         key: "Title",
//       },
//       "Title"
//     ),
//     ce(
//       "ul",
//       {
//         key: "ul",
//       },
//       [
//         ce(
//           "li",
//           {
//             key: "Home",
//           },
//           "home"
//         ),
//         ce(
//           "li",
//           {
//             key: "About us",
//           },
//           "About us"
//         ),
//       ]
//     ),
//   ]
// );

// Create header element using jsx
// JSX => react.CreateElement => Object => HTML(DOM) (babel does all the conversion).

const heading = (
  <h1 id="h1" key="h1">
    This is JSX
  </h1>
);

//React Component
//Functional Component - new way of writing component
//Class component - old way of writing component

//Title Component is a functional component
const Title = () => {
  return (
    <h1 id="title" key="title">
      Hello World with JSX
    </h1>
  );
};

// Header Component is functional component

const HeaderComponent = function () {
  return (
    <div>
      <Title />
      {/* {Title()}  */}
      {2 + 3 + 4}
      {console.log(2 + 3 + 4)}
      <h1>Namaste React Functional Component</h1>
      <h2>Heading 2!!!!</h2>
    </div>
  );
};

// Create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<HeaderComponent />);
