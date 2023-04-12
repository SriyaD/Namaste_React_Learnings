// const heading = React.createElement(
//     "h1", 
//     {id:"heading", xyz:"abc"},
//     "Hello World");
// // console.log(heading); returns an object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading); // while rendering that heading object converted to html
//----------------------------------Nested html structure
const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child1"
    }, [
        React.createElement("h1", {}, "I am an h1 tag"),
        React.createElement("h2", {}, "I am an h2 tag")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {}, "I am an h1 tag"),
        React.createElement("h2", {}, "I am an h2 tag")
    ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
