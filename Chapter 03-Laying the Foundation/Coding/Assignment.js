import { React, createElement as ce } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import "./Assignment.css";
import logo from "./logo.png";
import logo1 from "./logo1.png";

/*
// Q: Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class “title” )

const Header = ce(
  "div",
  {
    className: "Title",
    key: "Title",
  },
  [
    ce(
      "h1",
      {
        key: "h1",
      },
      "This is a h1 Tag"
    ),

    ce(
      "h2",
      {
        key: "h2",
      },
      "This is a h2 Tag"
    ),

    ce(
      "h3",
      {
        key: "h3",
      },
      "This is a h3 Tag"
    ),
  ]
);


// Q2: Create the same element using JSX

const header = (
  <div className="title" key="Title">
    <h1 key="h1">This is a h1 tag</h1>
    <h2 key="h2">This is a h2 tag</h2>
    <h3 key="h3">This is a h3 tag</h3>
  </div>
);


// Q3: Create a functional component of the same with JSX and pass attribute into the tag in JSX.
const Header = () => {
  return (
    <div className="title" key="Title">
      <h1 style={{ color: "red" }} key="h1">
        This is a h1 tag
      </h1>
      <h2 style={{ color: "green" }} key="h2">
        This is a h2 tag
      </h2>
      <h3 style={{ color: "orange" }} key="h3">
        This is a h3 tag
      </h3>
    </div>
  );
};


// Q4: Composition of Component(Add a component inside another)

const AnotherComponent = () => {
  return (
    <h2>
      This is a first Component which will be added into another component
    </h2>
  );
};

const Header = () => {
  return (
    <div className="title" key="Title">
      <h1 style={{ color: "red" }} key="h1">
        This is a h1 tag
      </h1>
      <h2 style={{ color: "green" }} key="h2">
        This is a h2 tag
      </h2>
      <h3 style={{ color: "orange" }} key="h3">
        This is a h3 tag
      </h3>
      <AnotherComponent />
    </div>
  );
};
*/

//Q5: {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX

//const element = <h1>This is a react Element</h1> //This is a react element.

// const TitleElement = () => {
//   return <h2 style={{ color: "purple" }}>This is a Title Element</h2>;
// }; // This is a title component

// Q6: Create a Header Component from scratch using Functional Components with JSX
//      * Add a Logo on left
//      * Add a search bar in middle
//      * Add User icon on right
//      * Add CSS to make it look nice
const Header = () => {
  return (
    <>
      <header className="header">
        <div className="left">
          <img src={logo} alt="logo" />
        </div>
        <div className="center">
          <input
            className="input"
            type="text"
            placeholder="Search anything you want..."
          />
          <button type="submit">submit</button>
        </div>
        <div className="right">
          <img src={logo1} alt="logo1" />
        </div>
      </header>
           
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
