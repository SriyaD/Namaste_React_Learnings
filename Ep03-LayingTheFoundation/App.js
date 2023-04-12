import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement(object) => HTMLElement(render)
// const heading = React.createElement("h1",
//     {
//         "id": "heading"
//     },
//     "Heading🚀");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// console.log(heading);

//JSX - HTML like syntax or XML like syntax
// console.log(heading); console.log(
//This Jsx is not understood by the Js engine at root.render(JSXHeading);
//Jsx is transpiled into react code(machine understandablSe code by a package called babel)
//babel(Transpiler or js compiler) is a package installed by PARCEL itself.
//JSX ==> React.createElement(object) ==> HTMLElement(render)
// const JSXHeading = <h1>Heading2</h1>;
// console.log(JSXHeading);
// root.render(JSXHeading);

// const jsxHeading = (
//   <h1 className="heading" tabIndex="1">
//     Namaste react using JSX
//   </h1>
// );
//in jsx the element's attributes are in camelCase whereas in html tags attributes

// Components -
// Functional component - new way of writing component
// Class component - old way of writing component
// Functional component - function returning a  jsx Code(js func returning  a react element)
// const root = ReactDOM.createRoot(document.getElementById("root"));
// const HeadingComponent1 = () =>{
//   return <h1>Functional component</h1>;
// }
// //same as
// const HeadingComponent2 = () => (<h1>Functional component</h1>);
// root.render(<HeadingComponent1/>)

//component composition - one component inside the other
// const Title = () => {
//   return <h1 id="title">Namaste React</h1>;
// };
// const HeaderComponent = () => {
//   return (
//     <div>
//       {Title}
//       {/* This is not working but should work */}
//       <Title />
//       {Title()}
//       <Title></Title>
//       <h1>Namaste React Functional component</h1>
//       <h2>This is h2 tag</h2>
//     </div>
//   );
// };
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeaderComponent />);

//Fragments concept - React fragment behaves like an empty tag
//All react elemenets should have a single parent, i.e, they should be enclosed in a single div.
//But we dont want that extra div to be rendered on the DOM, so use React fragment insted of div
//<React.Fragment></React.Fragment> same as <></>
const Title = () => {
  return <h1 id="title">Namaste React</h1>;
};
const HeaderComponent = () => {
  return (
    <React.Fragment>
      <Title />
      <h1>Namaste React Functional component</h1>
      <h2>This is h2 tag</h2>
    </React.Fragment>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);

