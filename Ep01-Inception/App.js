import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//     "h1", 
//     {id:"heading", xyz:"abc"},
//     "Hello World");

// // console.log(heading); returns an object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading); // while rendering that heading object converted to html



//----------------------------------Nested html structure
{/* <div id="parent">
    <div id="child">
        <h1>I am h1 tag</h1>
    </div>
</div> */}
// const parent = React.createElement(
//     "div",
//     {id:"parent"},
//     React.createElement("div", {id:"child"}, 
//     React.createElement("h1",{}, "I am an h1 tag"))
// )
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);



//----------------------------------Nested html structure
{/* <div id="parent">
    <div id="child">
        <h1>I am h1 tag</h1>
        <h2>I am h1=2 tag</h2>
    </div>
</div> */}
// const parent = React.createElement(
//     "div",
//     {id:"parent"},
//     React.createElement(
//         "div", 
//         {id:"child"}, 
//     [React.createElement("h1",{}, "I am an h1 tag"),React.createElement("h2",{}, "I am an h2 tag")])
// )
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);



//----------------------------------Nested html structure
{/* <div id="parent">
    <div id="child">
        <h1>I am h1 tag</h1>
        <h2>I am h1=2 tag</h2>
    </div>
        <div id="child">
        <h1>I am h1 tag</h1>
        <h2>I am h1=2 tag</h2>
    </div>
</div> */}
const parent = React.createElement("div",{id:"parent"},
    [React.createElement("div", {id:"child1"}, 
    [   React.createElement("h1",{}, "I am an h1 tag"),
        React.createElement("h2",{}, "This is Namaste"),
    ]),
    React.createElement("div", {id:"child2"}, 
    [   React.createElement("h1",{}, "I am an h1 tag"),
        React.createElement("h2",{}, "I am an h2 tag"),
    ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);