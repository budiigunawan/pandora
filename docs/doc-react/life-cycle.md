---
sidebar_position: 3
---

# React Lifecycle

## What is React Component Lifecycle?

To put it in simple terms, you can think of the React component lifecycle as the “lifetime” of a component. Lifecycle methods are series of events that happen throughout the birth, growth, and death of a React component.

![Props Result](/img/documentation/react/react-lifecycle-diagram.png)

In React, components go through a lifecycle of events:

1. **Mounting (adding nodes to the DOM)**

Mounting a component is like bringing a newborn baby into the world. This is the component’s first glimpse of life. At this phase, the component, which consists of your code and React’s internals, is then inserted into the DOM.

2. **Updating (altering existing nodes in the DOM)**

After the mounting phase, the React component “grows” during the updating phase. Without updates, the component would remain as it was when it was initially created in the DOM. As you might imagine, many of the components you write till need to be updated ,  whether via a change in `state` or `props`. Consequently, they go through the updating phase as well.

3. **Unmounting (removing nodes from the DOM)**

The final phase is called the unmounting phase. At this stage, the component “dies”. In React lingo, it is removed from  the DOM.

4. **Error handling (verifying that your code works and is bug-free)**

There’s one more phase a React component can go through: the error handling phase. This occurs when your code doesn’t run or there’s a bug somewhere. Think of it like an annual physical.

## React Lifecycle Methods

![Props Result](/img/documentation/react/react-lifecycle-methods-diagram.png)

Each React lifecycle phase has a number of lifecycle methods that you can override to run code at specified times during the process. These are popularly known as component lifecycle methods.

### Mounting Lifecycle Method

```jsx title="src/myComponent.js"
import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      points: 0,
    };
    this.handlePoints = this.handlePoints.bind(this);
  }

  render() {
    return <h1>Hello, React!</h1>;
  }
}

export default MyComponent;
```

1. **constructor()**

The constructor method is the very first method as the component is **brought to life**. This method called before the component is mounted to the DOM. In most cases, you would initialize state and bind event handlers methods within the constructor method.

2. **render()**

If you want to render elements to the DOM, — e.g., returning some JSX — the render method is where you would write

3. **componentDidMount()**

After render is called, the component is mounted to the DOM and the componentDidMount method is invoked.

```jsx
componentDidMount() {
  this.fetchListOfTweets() // where fetchListOfTweets initiates a netowrk request to fetch a certain list of tweets.
}
```

This is a perfect place to do network request as soon as the component is mounted.

### Updating Lifecycle Method

Whenever a change is made to the state or props of a React component, the component is rerendered. In simple terms, the component is updated. This is the updating phase of the React component lifecycle.

### Unmounting Lifecycle Method

1. **componentWillUnmount()**

The componentWillUnmount lifecycle method is invoked immediately before a component is unmounted and destroyed. This is the ideal place to perform any necessary cleanup such as clearing up timers, cancelling network requests, or cleaning up any subscriptions that were created in componentDidMount() as shown below:

```jsx
// e.g add event listener
componentDidMount() {
    el.addEventListener()
}

// e.g remove event listener
componentWillUnmount() {
    el.removeEventListener()
 }
```
