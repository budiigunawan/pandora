---
sidebar_position: 4
---

# Qore SDK

Let's discover **Qore SDK**

## Introduction

### What is SDK?

SDK stands for **_Software Development Kit_** or **_devkit_** for short. It's a set of software tools and programs used by developers to create applications for spesific platforms. SDK tools will include a range of things, including libraries, documentation, code samples, processes, and guides that developers can use and integrate into their own apps. SDKs are designed to be used for specific platforms or programming languages. (**[clevertap](https://clevertap.com/blog/what-is-an-sdk/)**). At the moment, Qore SDK is only accessible in Javascript environtment.

### Prerequisites

1. **[Node JS](https://nodejs.org/en/)** version 12+
2. npx and npm executable.
3. Qore Account, sign up **[here](https://qore-admin.paralabs.io/register/form)**

## Getting Started

### Install Qore CLI

Install @feedloop/qore-cli globally via npm or yarn.

```shell
npm install --global @feedloop/qore-cli
```

```shell
yarn global add @feedloop/qore-cli
```

You can also run qore-cli via npx if you prefer not to pollute your global path.

```shell
npx @feedloop/qore-cli --help

# example: login to qore via npx
npx @feedloop/qore-cli login
```

### Authenticate Yourself

You will be asked to input your email & password. Choose your default project afterwards.

```shell
npx @feedloop/qore-cli login
```

### Set up Your React Project

1. **[Setup React JS Project](/docs/doc-react/react-intro)**
2. Initialize `package.json` file on your root project directory by triggering `npm init -y`, followed by installing required dependencies.

```shell title='Qore Client'
npm install --save @feedloop/qore-client
```

```shell title='Qore Cli'
npm install --save-dev @feedloop/qore-cli
```

```shell title='Qore React'
npm install --save @feedloop/qore-react
```

3. Set your newly-created project as the current project.

```shell title='Qore Set Project'
npx qore set-project
```

4. On your root project directory, run the codegen command to generate required config files.

```shell title='Qore Codegen'
npx qore set-project
```

5. Initialize qore client by creating the following file.

```jsx title="qoreContext.js"
// Create a new file called qoreContext.js that contains the following lines

import { QoreClient } from '@feedloop/qore-client';
import createQoreContext from '@feedloop/qore-react';
import config from './qore.config.json';
import schema from './qore.schema.json';

const client = new QoreClient(config);
client.init(schema);

const qoreContext = createQoreContext(client);
export default qoreContext;
```

```jsx title="Root Component"
// Add qore context provider to your root component.

const Root = () => {
  return (
    <qoreContext.context.Provider
      value={{
        client: qoreContext.client,
      }}
    >
      <YourApp />
    </qoreContext.context.Provider>
  );
};
```

### Codegen

```shell title='Generate configuration files'
npx @feedloop/qore-cli codegen
```

```shell title='Generate configuration files to src directory'
npx @feedloop/qore-cli codegen --path src
```

To ensure that you will have the latest version of your configuration files on your project, run this command when:

1. **The following files doesn't exist** on your root project directory.
2. **Everytime there are changes** on your project structure (includes views, fields, tables and forms).

| File name          | Description                                              |
| ------------------ | -------------------------------------------------------- |
| `qore.schema.json` | Contains the schema required to run qore client.         |
| `qore.config.json` | Contains the config required to connect to your project. |
| `qore-env.d.json`  | TypeScript type definitions of your project schema.      |

## Reading Data

### Reading List Row

Once initialized, your project views will be accessible via the client instance. You can start reading the data of your view.

```jsx title="src/pages/my-react-page.js"
import qoreContext from './qoreContext';

const Component = () => {
  const { data: allTasks, status } = qoreContext.view('allTasks').useListRow({
    offset: 10,
    limit: 10,
    order: 'asc',
  });
  return (
    <ul>
      {allTasks.map((task) => (
        <li>{task.name}</li>
      ))}
    </ul>
  );
};
```

data will contain rows of your `allTasks` view. In case an error occured, data can be null and `error` should contain the cause of error.

You can also specify `offset`, `limit` and `order` when performing a read view operation.

### Pagination

```jsx title="src/pages/my-react-page.js"
import qoreContext from './qoreContext';

const Component = () => {
  const { data: allTasks, status, fetchMore } = qoreContext
    .view('allTasks')
    .useListRow({
      offset: 10,
      limit: 10,
    });
  return (
    <ul>
      {allTasks.map((task) => (
        <li>{task.name}</li>
      ))}
      <button
        onClick={() => {
          // new items are being pushed to allTasks
          fetchMore({ offset: allTasks.length, limit: 10 });
        }}
      >
        Load more
      </button>
    </ul>
  );
};
```

Fetching more rows can be done by calling the fetchMore method as demonstrated above. It accepts a pagination config to match your desired items size of the next page data to be fetched.

### Reading Individual Row

```jsx title="src/pages/my-react-page.js"
import qoreContext from './qoreContext';

const Component = () => {
  const { data: someTask, status, error } = qoreContext
    .view('allTasks')
    .useGetRow('some-task-id');
  return (
    <ul>
      {allTasks.map((task) => (
        <li>{task.name}</li>
      ))}
    </ul>
  );
};
```

Oftentimes we want to get the detail of a specific row by the ID. Assuming the id is some-task-id, you can fetch it this way:

data will contain either a single row or null if an error has occured, error object will tell you the cause.

### Caching Data

```jsx title="src/pages/my-react-page.js"
import qoreContext from './qoreContext';

const Component = () => {
  const { data: allTasks, status, error } = qoreContext
    .view('allTasks')
    .useListRow(
      {
        offset: 10,
        limit: 10,
        order: 'asc',
      },
      { networkPolicy: 'cache-only' }
    );
  return (
    <ul>
      {allTasks.map((task) => (
        <li>{task.name}</li>
      ))}
    </ul>
  );
};
```

A qore client has an internal storage that acts as a cache that is turned on by default to minimize http request.

By setting the `networkPolicy` option to `cache-only`, you are telling qore client to only get the data from the cache instead of getting it from the server.

`networkPolicy` option accepts the following values:

| Value               | Description                                                         |
| ------------------- | ------------------------------------------------------------------- |
| `cache-only`        | Read data only from the cache.                                      |
| `network-only`      | Read data only from the network.                                    |
| `network-and-cache` | Read data from the cache first, then a network request will follow. |

Reading data from `network-and-cache` may require you to subscribe to the read operation because there will be a follow up result from the network after the operation hits the cache.

`stale` will be `true` when it hits the cache, `false` when it hits the network. Indicating that the data might be obsolete due to a follow up network request.

### Revalidating Data

```jsx title="src/pages/my-react-page.js"
import qoreContext from "./qoreContext";

const Component = () => {
  const { data: allTasks, revalidate } = qoreContext.view("allTasks").useListRow(
    {
      offset: 10,
      limit: 10,
      order: "asc",
    },
    { networkPolicy: "network-and-cache" }
  );
  return (
    <>
    <button onClick={revalidate}>refresh</button>
    <ul>
      {allTasks.map((task) => (
        <li>{task.name}</li>
      ))}
    </ul>
    <>
  );
};
```

Oftentimes you want to get the most up-to-date state of your data from the network.

By calling `revalidate()`, you are asking qore client to send a `network-only` mode to your operation, giving you the most recent state of the data. Think of it as a reload button of your browser tab.

### Polling Interval

```jsx title="src/pages/my-react-page.js"
import qoreContext from "./qoreContext";

const Component = () => {
  const { data: allTasks, revalidate } = qoreContext.view("allTasks").useListRow(
    {
      offset: 10,
      limit: 10,
      order: "asc",
    },
    { networkPolicy: "network-and-cache", pollInterval: 5000 }
  );
  return (
    <>
    <button onClick={revalidate}>refresh</button>
    <ul>
      {allTasks.map((task) => (
        <li>{task.name}</li>
      ))}
    </ul>
    <>
  );
};
```

Instead of calling `operation.revalidate()` periodically, you can ask qore client to send request periodically by specifying a polling interval option in milisecond.

This operation will be refreshed every 5 seconds, a nice near-realtime effect to your users.

## Writing Data

Similar to reading data, writing data is accessible from each view object.

### Insert a New Row

```jsx title="src/pages/my-react-page.js"
import qoreContext from './qoreContext';

const Component = () => {
  const { insertRow, status } = qoreContext.view('allTasks').useInsertRow();
  return (
    <button
      onClick={async () => {
        await insertRow({ ...data });
      }}
    >
      insert
    </button>
  );
};
```

Insert a data to `allTasks` view.
`data` must be compliant to the schema of the view, excluding the `id` field.

### Update a Row

```jsx title="src/pages/my-react-page.js"
import qoreContext from './qoreContext';

const Component = () => {
  const { updateRow, status } = qoreContext.view('allTasks').useUpdateRow();
  return (
    <button
      onClick={async () => {
        await updateRow('some-task-id', { ...data });
      }}
    >
      update
    </button>
  );
};
```

Update a data of `allTasks` view with an id of `some-task-id`.
`data` must be compliant to the schema of the view, excluding the `id` field.

### Add & Remove Relationships

```jsx title="src/pages/my-react-page.js"
import qoreContext from './qoreContext';

const Component = () => {
  const { addRelation, removeRelation, statuses, errors } = qoreContext
    .view('allTasks')
    .useRelation(taskId);
  return (
    <div>
      <button
        disabled={statuses.addRelation === 'loading'}
        onClick={async () => {
          await addRelation({
            person: [member.id],
            links: links.map((link) => link.id),
          });
        }}
      >
        add relation
      </button>
      <button
        disabled={statuses.removeRelation === 'loading'}
        onClick={async () => {
          await removeRelation({ person: [member.id] });
        }}
      >
        remove relation
      </button>
    </div>
  );
};
```

Both `addRelation` and `removeRelation` accept the `id` of the target row, followed by an object with the key being the relation name and the value is an array of reference id of the relationship.

In this example we are adding `member.id` to the relationship of a specific row on the `allTasks` view and then removing it.

### Update a Row

```jsx title="src/pages/my-react-page.js"
import qoreContext from './qoreContext';

const Component = () => {
  const { updateRow, status } = qoreContext.view('allTasks').useUpdateRow();
  return (
    <button
      onClick={async () => {
        await updateRow('some-task-id', { ...data });
      }}
    >
      update
    </button>
  );
};
```

Update a data of `allTasks` view with an id of _some-task-id_.

`data` must be compliant to the schema of the view, excluding the `id` field.

### Upload a File

```jsx title="src/pages/my-react-page.js"
import qoreContext from './qoreContext';

const Component = () => {
  const { updateRow, status } = qoreContext.view('allTasks').useUpdateRow();
  const handleUpload = async (event) => {
    const file = e.currentTarget.files?.item(0);
    if (!file) return;
    const url = await client.view('allTasks').upload(file);
    await updateRow('some-task-id', { ...data, avatar: url });
  };
  return <input type='file' onChange={handleUpload} />;
};
```

Adding files to a row requires you to upload the file first. The file type of the uploaded files must match with the field target, unwanted file types will be ignored.

The upload() method accepts a file variable that is a **[File](https://developer.mozilla.org/en-US/docs/Web/API/File)** item of a **[FileList](https://developer.mozilla.org/en-US/docs/Web/API/FileList)** object from a file input html element.

```jsx title="input component"
<input type='file' id='fileInput' />
```

### Delete a Row

```jsx title="src/pages/my-react-page.js"
import qoreContext from './qoreContext';

const Component = () => {
  const { deleteRow, status } = qoreContext.view('allTasks').useDeleteRow();
  return (
    <button
      onClick={async () => {
        await deleteRow('some-task-id', { ...data });
      }}
    >
      delete
    </button>
  );
};
```

Remove a data of allTasks view with an id of some-task-id.

## Authenticating Your User

Activate **authentication settings** on Qore Dasboard:

![Auth Settings](/img/documentation/qore/qore-auth-settings.png)

```jsx title="src/pages/my-react-page.js"

// qoreContext.js
// give qore client a way to access user token
const client = new QoreClient({..config, getToken: () => cookies.get("token")})

// YourComponent.js
const YourComponent = () => {
  const client = qoreContext.useClient();
  const handleLogout = () => {
    // log a user out by removing the token from your storage
    cookies.remove("token");
  }
  const handleLogin = async (email, password) => {
    const token = await client.authenticate(
      "email@yourcompany.com",
      "plain password"
    );

    // save token to somewhere safe
    cookies.set("token", token);
  };
  // call handleLogin whenever your form is ready
  return <form onSubmit={handleLogin}>Some form</form>;
};
```

As you can register new users to qore, you might need to log them in to your application.

### Get Current User

```jsx title="src/pages/my-react-page.js"
const Component = () => {
  const { user } = qoreContext.useCurrentUser();
  return <div>{user ? user.email : 'Loading...'}</div>;
};
```

If the token is valid, an object that describes the current user will be returned from this call.

✨ Source: **[Qore SDK Docs](https://sdk-docs.qorebase.io/#features)**
