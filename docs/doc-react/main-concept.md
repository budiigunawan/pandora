---
sidebar_position: 2
---

# React Main Concept

## React Create App Project Structure

If you look into the Create React APP project structure, you'll see a `/public` and `/src` directory, along with the regular `node_modules`, `.gitignore`, `README.md`, and `package.json`.

In `/public`, our important file is `index.html`, which is very similar to the static `index.html`. This time, no libraries or scripts are being loaded in. The `/src` directory will contain all our React code.

```jsx title="src/index.js"
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>Hello, React!</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
```

As you can see above, when `<h1>Hello, React!</h1>` is typed in the return part of the `render` method, **Hello, React!** is shown in the browser `localhost:3000`. For now, remember that whatever is insinde `return` in `App Component` will be displayed in the browser. We'll cover the other parts later.

## JSX

### JSX Introduction

```jsx "
const element = <h1>Hello, world!</h1>;
```

Funny tag syntax above is neither a string nor HTML. It's called JSX, which stands for Javascript XML. With JSX, we can write what looks like HTML, and also we can create and use our own XML-like tags. Here's what JSX looks like assigned to a variable.

JSX is actually closer to JavaScript, not HTML, so there are a few key differences to note when writing it.

- `className` is used instead of `class` for adding CSS classes, as `class` is a reserved keyword in JavaScript.
- Properties and methods in JSX are **camelCase** - `onclick` will become `onClick`.
- Self-closing tags must end in a slash - e.g. `<img />`

```jsx title='embedjs-expressions"
const name = 'Tania';
const heading = <h1>Hello, {name}</h1>;
```

JavaScript expressions can also be embedded inside JSX using curly braces, including variables, functions, and properties.

### Why JSX?

Using JSX is not mandatory for writing React. Under the hood, it's running createElement, which takes the tag, object containing the properties, and children of the component and renders the same information.

```jsx title='No-JSX"
const heading = React.createElement(
  'h1',
  { className: 'site-heading' },
  'Hello, React!'
);
```

```jsx title='JSX"
const heading = <h1 className='site-heading'>Hello, React</h1>;
```

The No-JSX code will have the same output as the JSX above. Most people find **JSX is easier to write and understand** than creating and appending many elements in vanilla JavaScript.

## Component

So far, we've created one component - the `App` component. Almost everything in React consists of components, which can be `class components` or `functional components`.

Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Most React apps have many small components, and everything loads into the main App component. Components also often get their own file, so let's change up our project to do so.

Remove the `App` class from `index.js`, so it looks like this.

```jsx title='src/index.js"
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
```

We'll create a new file called `App.js` and put the component in there.

```jsx title='src/App.js"
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>Hello, React!</h1>
      </div>
    );
  }
}

export default App;
```

We export the component as `App` and load it in `index.js`. It's not mandatory to separate components into files, but an application will start to get unwieldy and out-of-hand if you don't.

### Class Component

Class components are ES6 classes that return JSX. To define a React component class, you need to extend `React.Component` and must have an **additional render( ) method** for returning JSX :

```jsx title='class-component"
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>Hello, React!</h1>
      </div>
    );
  }
}

export default App;
```

Why use Class Component?

We used to use class components because of "state". In the older versions of React **(version < 16.8), it was not possible to use state inside functional components**.

Therefore, we needed functional components for rendering UI only, whereas we'd use **class components for data management and some additional operations (like life-cycle methods)**.

This has changed with the introduction of React Hooks, and now we can also use states in functional components as well.

A Class Component:

- is an ES6 class, will be a component once it ‘extends’ a React component.
- takes Props (in the constructor) if needed.
- must have a render( ) method for returning JSX.

### Functional Component

The other type of component in React is `functional component`. This is the simplest way to define component because it is literally JavaScript functions.

```jsx title='functional-component"
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

export default Welcome;
```

Functional Component in React:

- is a JavaScript/ES6 function
- must return a React element (JSX)
- always starts with a capital letter (naming convention)
- takes props as a parameter if necessary

## Props

### Props Introduction

React has a special object called a prop (stands for property) which we use to transport data from one component to another. But be careful – props only transport data in a one-way flow (only from parent to child components). It is not possible with props to pass data from child to parent, or to components at the same level.

```jsx title='src/App.js"
import Welcome from './Welcome';

function App() {
  return (
    <div className='App'>
      <Welcome name='John' />
      <Welcome name='Mary' />
      <Welcome name='Alex' />
    </div>
  );
}
```

Props are custom values and they also make components more dynamic. Since the Welcome component is the child here, we need to define props on its parent (App), so we can pass the values and get the result simply by accessing the prop "name":

```jsx title='src/welcome.js"
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

export default Welcome;
```

Result on web browser:

![Props Result](/img/documentation/react/react-props.png)

We can modify the `App` code to make it simpler by using `map method`. This method **creates a new array** populated with the results of calling a provided function on every element in the calling array.

```jsx title='src/App.js"
import React from 'react';
import Welcome from './Welcome';
const userList = ['John', 'Marry', 'Alex'];

function App() {
  return (
    <div className='App'>
      {userList.map((user, index) => {
        return (
          <React.Fragment key={index}>
            <Welcome name={user} />
          </React.Fragment>
        );
      })}
    </div>
  );
}
```

You'll notice there is a key index to each fragment. You should **always use keys when making lists in React**, as they help identify each list item. We'll also see how this is necessary in a moment when we want to manipulate list items.

Props are an **effective way to pass existing data to a React component**, however the component **cannot change the props - they're read-only**. In the next section, we'll learn how to use state to have further control over handling data in React.

## State

Right now, we're storing our character data in an array in a variable, and passing it through as props. This is good to start, but imagine if we want to be able to delete an item from the array. With props, we have a one way data flow, but with state we can update private data from a component.

React has another special built-in object called state, which allows components to create and manage their own data. So unlike props, components cannot pass data with state, but they can create and manage it internally.

### State Class Component

Here is an example showing how to use state:

```jsx title='src/stateClass.js'
class Test extends React.Component {
  constructor() {
    this.state = {
      id: 1,
      name: 'test',
    };
  }

  render() {
    return (
      <div>
        <p>{this.state.id}</p>
        <p>{this.state.name}</p>
      </div>
    );
  }
}

export default Test;
```

**How to update state?** State should not be modified directly, but it can be modified with a special method called setState( ).

```jsx
this.state.id = 2022; // wrong

this.setState({
  // correct
  id: 2022,
  name: 'John',
});
```

### State Functional Component

Another important question you might ask about state is where exactly we can use it. In the early days, state could only be used in class components, not in functional components.

That’s why functional components were also known as stateless components. However, after the introduction of React Hooks, state can now be used both in class and functional components.

```jsx title='src/stateFunctional.js'
import React from 'react';
function test() {
  const [state, setState] = React.useState({ id: 1, name: 'test' });
  return (
    <div>
      <p>{state.id}</p>
      <p>{state.name}</p>
    </div>
  );
}

export default test;
```

**How to Update State?**

```jsx
setState({ id: 2022, name: 'John' });
```
