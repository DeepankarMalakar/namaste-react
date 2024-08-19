import React, { createElement } from 'react';
import ReactDOM from 'react-dom/client';

// JSX - JSX is not HTML inside JS, JSX is HTML-like or XML-like syntax.
// JSX is syntax extension for javascript.

const jsxHeading = (<h1 id='heading' className='head'>Namaste from JSX 🚀</h1>)

// After transpilation(converting) the jsxHeading will become something like this, which JS engine understand, the above syntax is not understand by JS Engine so it is converted by parcel or vite or any other with the help of babel(a JS package) before it goes to JS Engine.

// const jsxHeading = React.createElement("h1", {id: "heading", className: "head"}, "Namaste from JSX🚀")

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);