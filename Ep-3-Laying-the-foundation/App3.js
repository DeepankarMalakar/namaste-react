import React, { createElement } from 'react';
import ReactDOM from 'react-dom/client';

const txt = "Welcome";

// * JSX - JSX is not HTML inside JS, JSX is HTML-like or XML-like syntax.
// * JSX is syntax extension for javascript.

// * React Element
const jsxHeading = (<h1 id='heading' className='head'>{txt}, Namaste from JSX 🚀</h1>)

//  * After transpilation(converting) the jsxHeading will become something like this, which JS engine understand, the above syntax is not understand by JS Engine so it is converted by parcel or vite or any other with the help of babel(a JS package) before it goes to JS Engine.

// const jsxHeading = React.createElement("h1", {id: "heading", className: "head"}, "Namaste from JSX🚀")

console.log(jsxHeading);


// * React Components
// * Two types or ways to create a react component: Class Base Components(old way), Functional Components(new way).

// * React Functional Component

// const Subheading = () => {
//     return <h2 className='subheading'>Namaste from React Functional Component</h2>
// };

// const Subheading = () => <h2 className='subheading'>Namaste from React FUnctional Component</h2>

const title = "Learning React JSX";

const Heading = () => (
    <div id='container'>
        <span>{title}</span>
        <span>{jsxHeading}</span>
        {console.log("Just checking")}
        <h1 className='heading'>Namaste from React Functional Component</h1>
        <Subheading />
        {/* {Subheading()}; */}
        {/* <Subheading></Subheading> */}
    </div>
)


const Subheading = () => (
    <div id='secondContainer'>
        <h2 className='subheading'>React Functional Component</h2>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);    rendering react element

root.render(<Heading />)  // rendering react functional component