# Set-up for first time
- mkdir my-react-app
- cd my-react-app
- npm init -y
- npm install react react-dom parcel --save-dev

- Create index.js and index.html or any files with the content 

- npx parcel index.html

- git init
- git add .
- git commit -m "Initial commit"

- git remote add origin https://github.com/your-username/your-repo-name.git
- git push -u origin main

# Difference between `package.json` and `package.lock.json`

`package.json`

```
- package.json defines the dependencies(things or packages) your project needs.
- Defines project metadata (name, version, author, etc.)
- Lists project dependencies and their desired versions (using ranges or exact versions)
- Manually editable
```

`package-lock.json`

```
- package-lock.json locks down the exact versions of those dependencies(things or packages) to ensure consistency across different environments.
- Locks down exact versions of installed packages and their dependencies  
- Ensures consistent installations across different environments  
- Should not be edited manually
```

Think of it like this: The `package.json` file tells you what ingredients you need for a cake, while the `package-lock.json` file specifies the exact brands and quantities of those ingredients.

# Transitive Dependency

- <b>A transitive dependency is a package that your project doesn't directly depend on but is required by one of your direct dependencies.</b>

```
* Imagine this:

- You're building a car (your project).
- You need tires (direct dependency).
- The tire manufacturer uses rubber (transitive dependency) to make the tires.
```

```
In simpler terms:

- Your project directly depends on certain packages (direct dependencies).
- Those packages might also depend on other packages (transitive dependencies).
```

```
Example:

- Your project depends on react (direct dependency).
- react might depend on lodash (transitive dependency).
```

`NOTE: ` <b>Node modules does not required to be pushed in github repository, but package.json and package.lock.json is required to be pushed</b>
<br/>

# Assignment - 1 (Notes)

<b>1. What is `Emmet`?</b>

```
Emmet is a powerful code expansion tool that helps you write HTML, CSS, and other code snippets faster.
It uses abbreviations to generate full code structures. For example, typing div#container>p.text and pressing Tab will expand to <div id="container"><p class="text"></p></div>.
```

<b>2. Difference between a `Library` and `Framework`?</b>

```
- Library: A collection of reusable code that you can incorporate into your project to perform specific tasks. You have more control over the overall structure of your application. (Example: React, Lodash)
- Framework: A complete structure for building applications, providing a foundation and guidelines. It often imposes more structure on your code. (Example: Angular, Vue).
```

<b>3. What is `CDN`? Why do we use it?</b>

```
CDN stands for Content Delivery Network. It's a geographically distributed network of servers that cache and deliver web content. We use CDNs to:  

- Improve website performance by reducing loading times  
- Increase website availability
- Reduce bandwidth costs  
- Handle increased traffic
```

<b>4. Why is React known as `React`?</b>
```
The name "React" is likely derived from the library's ability to efficiently update and re-render components in response to changes in data. It "reacts" to data changes.
``` 
<b>5. What is `crossorigin` in script tag?</b>
```
The crossorigin attribute in a script tag indicates to the browser that the script is coming from a different origin (domain) and that it's safe to load. This helps prevent security issues.
```
<b>6. What is the difference between `React` and `ReactDOM`?</b>
```
- React is a JavaScript library for building user interfaces. It focuses on component creation and state management.
- ReactDOM is a package that provides the methods to render React components into the DOM (Document Object Model). It bridges the gap between React's virtual DOM and the real DOM.

```

<b>7. What is the difference between `react.development.js` and `react.production.js` files via CDN?</b>
```

- react.development.js is a development build of React that includes additional debugging information and warnings. It's suitable for development environments.
- react.production.js is a production build of React that is optimized for performance and size. It's suitable for deployment to production environments.

```
<b>8. What is `async` and `defer`?</b>
```
- async tells the browser to download the script asynchronously without blocking page rendering. The script executes as soon as it's downloaded.
- defer tells the browser to download the script asynchronously but delay execution until the HTML parsing is complete.
```

# Comparison of Parcel, Vite, and Other Bundlers
<b>`Parcel`</b>
```
- Zero configuration: Minimal setup required.
- Fast build times: Leverages modern JavaScript features for efficient bundling.
- Built-in development server: Includes hot module replacement(HRM) and live reloading.
- Supports various asset types: Handles images, fonts, and other assets.
- Less customizable: Offers fewer configuration options compared to Webpack.
```

<b>`Vite`</b>
```
- Lightning-fast development server: Leverages native ES modules for rapid development.
- Production-ready builds: Creates optimized builds for deployment.
- Plugin-based architecture: Extensible with plugins for custom features.
- Strong TypeScript support: Built-in TypeScript support.
- Growing ecosystem: Increasingly popular and gaining momentum.
```

<b>`Webpack`</b>
```
- Highly configurable: Offers extensive customization options.
- Mature and feature-rich: Wide range of plugins and loaders available.
- Complex setup: Requires more configuration compared to Parcel and Vite.
- Steeper learning curve: Can be challenging for beginners.
- Strong community and ecosystem: Large and active community.
```

<b>`NOTE: Parcel and Vite are not React frameworks or libraries`.</b>
```
- They are bundlers

- Bundlers take your code, including React components, and combine them into optimized files for the browser. 
- They handle tasks like:
* Compiling JSX into JavaScript   
* Bundling your code and dependencies   
* Optimizing images and other assets etc 
  
- React is a JavaScript library for building user interfaces. It's the framework you use to create your components and manage state.   
whereas,
- Parcel and Vite are tools that help you build and optimize your React application, but they are separate entities.
```

# Caching
- Caching is a technique used to store frequently accessed data in a temporary storage location (cache) to improve performance.
<br />
- ```.parcel-cache```: Parcel's Speed Booster
The .parcel-cache directory is where Parcel stores information about your project to accelerate build times.

# node_modules
- node_modules is a directory in your project that stores all the external packages and dependencies required by your application.

# Assignment - 2 (Notes)
<b>1. What is `NPM`?</b>
```
NPM is a package manager for Javascript.

It's a tool that helps you:
- Find reusable code packages created by other developers.
- Install these packages into your project.
- Manage the versions of these packages.
- Publish your own code packages for others to use.
```
<b>2. What is `Parcel/Webpack`? Why do we need it?</b>
```
- Parcel and Webpack are bundlers
- A bundler is a tool that combines multiple JavaScript files, CSS files, and other assets into a smaller number of files for better performance in the browser.

- We need them because:
* Combines files: Brings together all your code into a single or a few files.
* Optimizes code: Makes your code smaller and faster by removing unnecessary parts.
* Handles dependencies: Manages relationships between different code parts.   
* Supports modern features: Allows you to use newer JavaScript features.
```

<b>3. What is `.parcel-cache` </b>
```
- .parcel-cache is a directory created by Parcel to store information about your project during the build process.
- In essence, .parcel-cache is a temporary storage area for Parcel to optimize its performance and build speed.

- The .parcel-cache directory primarily contains:
* Cached versions of pre-processed files
* Dependency graphs
* Metadata
```

<b>4. What is `npx`</b>
```
- It's a command-line tool that comes bundled with npm.

- What does it do?
* Executes packages: Allows you to run Node.js packages directly from the npm registry without installing them globally.
* Temporary installation: Downloads the necessary package and its dependencies, executes it, and then removes it.
* Avoids global conflicts: Prevents cluttering your global node modules.
```

<b>5. What is difference between `dependencies` vs `devDependencies`</b>
```
- Dependencies and devDependencies are two types of packages listed in a package.json file.

Dependencies:
- Required for production: These packages are essential for your application to run in a production environment.   
- Included in the final build: They are bundled with your application when deployed.
- Examples: React, Redux, Axios

devDependencies:
- Required for development: These packages are used for development tasks like testing, building, and linting.
- Not included in production: They are not necessary for the application to run in production.   
- Examples: Jest, Babel, Webpack, Parcel, vite
```

<b>6. What is `tree shaking`?</b>
```
Tree shaking is a process that removes unused code from your JavaScript bundle.   

- Think of your code as a tree. Tree shaking "shakes" the tree, removing unnecessary branches (code) that aren't needed.   

How it works:
* Analyzes code: Identifies which parts of your code are actually used.   
* Removes unused code: Eliminates code that isn't necessary for the application to run.   
* Smaller bundle size: Results in a smaller and faster-loading JavaScript file. 
```

<b>7. What is `Hot Module Replacement(HRM)`?
</b>
```
- Hot Module Replacement (HMR) is a development feature that allows you to update modules in a running application without a full page reload.

- HRM is a gamechanger because: 
* Saving time: You don't have to wait for the entire page to refresh.   
* Preserving state: Your application's state is maintained, unlike a full reload.   
* Instant feedback: See changes reflected immediately.  

How it works:
- When you save a file, the bundler (like Webpack or Parcel) detects the change.
- It sends an update to the browser, containing the modified module.
- The browser replaces the old module with the new one without reloading the entire page.
```

<b>8. List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words</b>
```
- Zero Configuration: Parcel just works out of the box. No complex configuration files needed.
- Hot Module Replacement (HMR): Instantly see changes in your browser without full reloads, boosting development speed.
- Built-in Development Server: Provides a local environment for testing your application, complete with live reloading.
- Asset Optimization: Automatically optimizes images, fonts, and other assets for performance.
- Cross-browser Compatibility: Ensures your code works across different browsers without extra effort.
```

<b>9. What is `.gitignore`? What should we add and not add into it?</b>
```
- .gitignore is a text file that tells Git which files or folders to ignore when committing changes. This prevents unnecessary files from being tracked and added to your repository.

- What to add to .gitignore:
* Generated files(node_modules, .idea, *.iml, .parcel-cache, dist)
* Large binary files: Images, videos, and other large files that can be easily downloaded or regenerated.
* Sensitive data
* Temporary files

- What not to add to .gitignore:
* Essential project files: Source code, configuration files (e.g., package.json), and other files necessary for the project.
```

<b>10. Why You Shouldn't Modify `package-lock.json`</b>
```
package-lock.json is a crucial file that automatically generated by npm to lock down the exact versions of your project's dependencies and their transitive dependencies.
```

<b>11. What is the `dist` folder?
</b>
```
- It contains the compiled, optimized, and production-ready version of your project.

This includes:   
* Minified JavaScript files: Your code made smaller and faster.
* Optimized CSS files: Stylesheets compressed for performance.
* Bundled assets: Images, fonts, and other resources combined for efficient delivery.

- Essentially, the dist folder is what you deploy to a live server. It's the final product of your build process.
```

<b>12. What is `browserlists`</b>
```
- Browserslist is a configuration file that specifies which browsers your project should support.
- By defining your target audience through Browserslist, you can optimize your code for performance and compatibility.
```

<b>13. `Caret (^)` and `Tilde (~)` in package.json</b>
```
- Caret (^) and tilde (~) are used in package.json files to specify version ranges for dependencies. They help control which versions of packages your project can use when running npm install or yarn install.

Caret (^):
* Locks the major version number.
* Allows updates to both minor and patch versions.
* Useful for libraries where you want to benefit from new features and bug fixes without breaking changes.

Tilde (~):
* Locks the major and minor version numbers.
* Allows updates only to the patch version (the third number).
* Useful for libraries where stability is crucial.
```

# Assignment - 3 (Notes)
<b> 1. What is `JSX`?</b>
```
JSX is a syntax extension for JavaScript that allows you to write HTML-like structures within your JavaScript code. It's primarily used in React, but it can also be used with other frameworks or libraries.
```

<b>2. `Superpowers` of `JSX`</b>
```
- Clarity and Readability: JSX code often looks more similar to HTML, making it easier to understand and maintain.
- Concise Syntax: JSX allows you to write HTML-like structures directly in your JavaScript code, eliminating the need for complex function calls.
- Embedding Expressions: You can embed JavaScript expressions within JSX using curly braces {}, making it dynamic and flexible.
```

<b>3. Role of the `type` Attribute in the script Tag</b>
```
The type attribute in the script tag specifies the type of script being included. While it's optional, it can be useful for indicating the script's purpose or language.

Common type values:

- text/javascript: The default type, indicating a JavaScript script.
- module: Specifies a JavaScript module, which is a newer standard for modularizing code.
- application/javascript: Another valid option for JavaScript scripts.
```

<b>4. `{TitleComponent}` vs `{<TitleComponent />}` vs
`{<TitleComponent></ TitleComponent>}` in JSX</b>
```
- {TitleComponent} and <TitleComponent /> are equivalent ways to render a custom component within JSX.
- The shorthand notation <TitleComponent /> is generally preferred for self-closing components.
- Using <TitleComponent></TitleComponent> is unnecessary and can be considered redundant.
```

# Fragments

* ```<React.Fragment></React.Fragment>``` and ```<></>``` are both used in React to group elements without introducing an additional DOM node. This is useful when you need to render multiple elements without wrapping them in a parent element like ```<div>```.
* Example : 
```
const App = () => {
  return (
    <React.Fragment>
      <h1>Title</h1>
      <p>Paragraph</p>
    </React.Fragment>
  );
};

This code will render the following HTML:
<h1>Title</h1>
<p>Paragraph</p>
```

# Virtual DOM
* The ```Virtual DOM``` is a lightweight, in-memory representation of the actual DOM. React creates a virtual DOM tree, compares it to the previous state, and efficiently updates only the necessary parts of the actual DOM. This optimization significantly improves performance.

# Reconciliation
* ```Reconciliation``` is the process of comparing the previous virtual DOM with the new virtual DOM to determine the minimal set of changes required to update the actual DOM. React uses a diffing algorithm to efficiently identify and apply these changes.

# React Fiber
* ```React Fiber``` is a new rendering engine introduced in React 16. It provides a more flexible and efficient way to reconcile and update the virtual DOM. Fiber allows for better control over rendering priorities and enables features like Suspense and Concurrent Mode.

# Keys in React
* ```Keys``` are used to uniquely identify components within a list. They help React efficiently update and re-order components when the list changes. Keys are essential for preserving the state of components and preventing unnecessary re-renders.

Can we use index as keys in React?
* While you can use index as keys in some cases, it's generally not recommended. Using index as keys can lead to unexpected behavior if the order of elements changes. It's better to use a unique identifier for each item, such as a database ID or a generated UUID.

# Props
* ```Props``` are arguments passed to React components. They allow you to customize the behavior and appearance of components. You can pass props to components using curly braces within JSX.

Ways to pass props:
* ```Inline``` : Pass props directly within the JSX element
```
const Greeting = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};

const App = () => {
  return (
    <div>
      <Greeting name="Alice" />
    </div>
  );
};
```

* ```Destructuring```: Destructure props within the component function
```
const Greeting = ({ name, age }) => {
  return <h1>Hello, {name}! You are {age} years old.</h1>;
};

const App = () => {
  return (
    <div>
      <Greeting name="Alice" age={30} />
    </div>
  );
};
```

<b>```NOTE``` :  Destructuring can make your code more concise and readable, especially when dealing with many props. However, inline props can be simpler for basic cases.</b>

# Config Driven UI
* ```Config Driven UI (CDU)``` is a development approach where the user interface (UI) is dynamically generated based on configuration data rather than being hardcoded. This means that you can customize the appearance and behavior of your UI without modifying the actual code.

How it works:

* ```Define a configuration schema```: Specify the structure and types of data that will be used to configure the UI.
* ```Create UI components```: Develop reusable UI components that can accept configuration data as props.
* ```Load configuration data```: Fetch or load the configuration data from a file, database, or API.
* ```Render the UI```: Pass the configuration data to the UI components, and they will dynamically generate the appropriate elements based on the provided data.

Example :
```Amazon```
* Themes and Layouts: Amazon allows users to switch between different themes and layouts, such as dark mode or list/grid views. These preferences are stored in user configurations, dynamically altering the UI.
* Product Recommendations: The recommendation engine uses configuration data to determine which products to display to users based on their browsing history, purchase history, and other factors.
* Localization: Amazon supports multiple languages and regions. The UI is dynamically adapted based on the user's language and location preferences, using configuration data to load appropriate content and translations.

# Hooks
- ```useState()```: Simple Counter Example: 
```
import React from 'react';
import ReactDOM from 'react-dom/client';
import  { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App
```

# Virtual DOM ~ Detailed
- ```Virtual DOM``` is like a blueprint for your web page, its the representation of the actual DOM.

Here's a quick breakdown of how it works:

- ```React creates a virtual DOM```: When your React component renders, it creates a virtual DOM representation of the UI.
- ```Updates```: Whenever something changes (like user interaction or data updates), React creates a new virtual DOM.
- ```Comparison```: React compares the old and new virtual DOMs to identify the minimal changes needed.
- ```DOM Updates```: React updates only the necessary parts of the actual DOM, minimizing performance overhead.

- Example:-
```
Component:

import React from 'react';

function MyComponent() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>This is a paragraph.</p>
    </div>
  );
}

Virtual DOM for this Component: 

{
  type: 'div',
  props: {
    children: [
      {
        type: 'h1',
        props: {
          children: 'Hello, World!'
        }
      },
      {
        type: 'p',
        props: {
          children: 'This is a paragraph.'
        }
      }
    ]
  }
}

Basically, it creates an object(or React Element) from the actual DOM.
```

# Why React is fast ?
- Because, React efficiently manipulates the DOM, It creates a blueprint of your website (called the Virtual DOM). When something changes on your website (like clicking a button), React updates the blueprint(Virtual DOM) and only changes the parts of the actual website that need to be updated. This is much faster than rebuilding the entire website every time something changes.