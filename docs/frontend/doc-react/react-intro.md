---
sidebar_position: 1
---

# React Introduction

## What is React?

React is a Javascript library for building user interface. React is one of the most popular ones, with **over 100,000 stars on Github**. Many well-known companies use React like Facebook, Airbnb, and Dropbox.

## Prerequisites

There are a few things you should know in advance before you start playing around with React. If you've never used JavaScript or the DOM at all before, for example, I would get more familiar with those before trying to tackle React.

- Basic familiarity with **HTML & CSS.**
- Basic knowledge of **Javascript** and Programming.
- Basic Understanding of **the DOM.**
- Familiarity with **ES6 syntax and features.**

## Setup and Installation

The React team primarily recommends these solutions:

- If you’re **learning React** or **creating a new single-page app**, use `Create React App`.
- If you’re building a **server-rendered website with Node.js**, try `Next.js`.
- If you’re building a **static content-oriented website**, try `Gatsby`.

### Create React App

Create React App is an environment that comes pre-configured with everything you need to build a React app. It will create a live development server, use Webpack to automatically compile React, JSX, and ES6, auto-prefix CSS files, and use ESLint to test and warn about mistakes in the code.

You'll need to have `Node >= 14.00` and `npm >= 5.6` on your machine. To create a project run:

```shell
npx create-react-app project-name
```

Once that finishes installing, move to the newly created directory and start the project.

```shell
cd react-tutorial && npm start
```

Create React App doesn’t handle backend logic or databases; it just creates a frontend build pipeline, so you can use it with any backend you want.

When you’re ready to deploy to production, running `npm run build will` create an optimized build of your app in the `build folder`.

### Next.js

`Next.js` is a popular and lightweight framework for **static and server‑rendered applications** built with React. It includes **styling and routing solutions** out of the box, and assumes that you’re using Node.js as the server environment.

Learn Next.js from **[Next.js Official guide](https://nextjs.org/learn/basics/create-nextjs-app)**

### Gatsby

`Gatsby` is the best way to create **static websites** with React. It lets you use React components, but outputs pre-rendered HTML and CSS to guarantee the fastest load time.

Learn Gatsby from **[its official guide](https://www.gatsbyjs.com/docs/)** guide and a **[gallery of starter kits](https://www.gatsbyjs.com/starters/)**

Source:

✨ **[React JS Official Guide](https://reactjs.org/docs/getting-started.html)**

✨ **[Tania Rascia's Web](https://www.taniarascia.com/getting-started-with-react/)**
