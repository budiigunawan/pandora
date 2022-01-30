---
sidebar_position: 4
---

# React Hooks

## What is Hooks?

Hooks were first introduced in React 16.8. They let you use state and other React features without writing a class.

Before we continue, note that Hooks are:

- **Completely opt-in.** You can try Hooks in a few components without rewriting any existing code. But you don’t have to learn or use Hooks right now if you don’t want to.
- **100% backwards-compatible.** Hooks don’t contain any breaking changes.
- **There are no plans to remove classes from React.**
- **Hooks don’t replace your knowledge of React concepts.** Instead, Hooks provide a more direct API to the React concepts you already know: props, state, context, refs, and lifecycle. As we will show later, Hooks also offer a new powerful way to combine them.

## useState Hook

The state of your application is bound to change at some point. This could be the value of a variable, an object, or whatever type of data exists in your component.

To make it possible to have the changes reflected in the DOM, we have to use a React hook called `useState`. It looks like this:

```jsx title='src/App.js"
import { useState } from 'react';

function App() {
  const [name, setName] = useState('Ihechikara');
  const changeName = () => {
    setName('Chikara');
  };

  return (
    <div>
      <p>My name is {name}</p>
      <button onClick={changeName}> Click me </button>
    </div>
  );
}

export default App;
```

To be able to use this hook, you have to import the `useState` hook from React. After that, you have to create your state and give it an initial value (or initial state) which is "Ihechikara". The state variable is called name, and setName is the function for updating its value.

Next, the DOM has a paragraph containing the name variable and a button which fires a function when clicked. The `changeName()` function calls the `setName()` function which then changes the value of the name variable to the value passed in to the `setName()` function.

### How to use the useState Hook in Forms

```jsx title='src/form.js"
import { useState } from 'react';

function Form() {
  const [userProfile, setUserProfile] = useState({
    name: '',
    address: '',
    age: 0,
  });

  const handleChange = (e) => {
    setUserProfile({
      ...userProfile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userProfile);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>name:</p>
        <input
          type='text'
          name='name'
          value={userProfile.name}
          onChange={(e) => handleChange(e)}
          placeholder='Your Name'
        />
        <p>address:</p>
        <input
          type='text'
          name='address'
          value={userProfile.address}
          onChange={(e) => handleChange(e)}
          placeholder='Your Address'
        />
        <p>age:</p>
        <input
          type='number'
          name='age'
          value={userProfile.age}
          onChange={(e) => handleChange(e)}
          placeholder='Your Age'
        />
      </form>
      <button as='submit'>Submit</button>
    </div>
  );
}

export default Form;
```

Here, we use the onChange event listener which waits for any value change in the input field. Whenever there is a change, an anonymous function (which takes in the event object as a parameter) is fired which in turn calls the `setUserProfile()` function to update the value of userProfile object based on key name and the current value of the input field.

## useEffect Hook

The Effect Hook, just like the name implies, carries out an effect each time there is a state change. By default, it runs after the first render and every time the state is updated.

### Run an effect once

```jsx title='src/App.js"
import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`This effect only run once`);
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default App;
```

useEffect hook accepts an **empty array [] as a second argument**. When we leave the array empty, the effect will only run once irrespective of the changes to the state it is attached to.

### Attach an effect to a particular state

```jsx title='src/App.js"
import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`You have clicked the first button ${count} times`);
  }, [count]);

  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log(`You have clicked the second button ${count2} times`);
  }, [count2]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setCount2(count2 + 1)}>Click me</button>
    </div>
  );
}

export default App;
```

In the code above, we created two states and two useEffect hooks. Each state has an after effect attached to it by passing the name of the state `[count]` and `[count2]` to the corresponding useEffect array dependency.

So when the state of `count` changes, the useEffect hook responsible for watching these changes will carry out any after effect assigned to it. Same applies to `count2`.
