---
sidebar_position: 3
---

# Tables

Let's discover **Tables** in Qore.

## What is Table?

A table in a relational database is much like a **spreadsheet: It consists of rows and columns.** Each **row represents a unique record**, and each **column represents a field in the record.** For example, a table that contains product data for a brand might contain a row for each product and columns representing product information such as product number, name, price, etc. (**[PostgreSQL](https://www.postgresql.org/docs/14/ddl-basics.html)**)

## Create Table

To create a table manually without Qore, we use the aptly name **CREATE TABLE** comand. For example:

```shell
CREATE TABLE products (
    product_no integer,
    name text,
    price numeric
);
```

**Create Table with Qore:**

1. Click **+ button**, click **add new table button**, insert table name

![New Table](/img/documentation/qore/qore-new-table.png)

2. Qore will create **table** and **view** called All Table Name

![Table View](/img/documentation/qore/qore-table-view.png)

### What is View?

View is a **virtual table** based on the result-set of an SQL statement. A view **contains rows and columns, just like a real table.** The fields in **a view are fields from one or more real tables** in the database. We can add SQL statements and functions to a view and present the data as if the data were coming from one single table. (**[W3schools](https://www.w3schools.com/sql/sql_view.asp)**)

### New Column

1. Click **+ button** on upper right existing column name

- insert column Name

![New Column](/img/documentation/qore/qore-new-column.png)

2. Select Field Type

#### Field Type :

- **Text** : Text is the variable-length character string.
- **Number** : Store round number data
- **Date** : Store date values
- **Boolean** : Store boolean data (true, false, NULL)
- **Password** : Store password data
- **File** : Store image file
- **JSON** : Store JSON file
- **Select**
- **Relation**
- **Lookup**
- **Formula**
- **Rollup**
- **Action**

### Sort and Filter

## API Docs

API Docs is documentation to access your view that have been made before using an REST API.
You can access the documentation via this link: https://qore-admin.paralabs.io/orgs/*orgs-code*/projects/*project-code*/api-docs

### API Docs Method

**You can do these method to your view:**
![API Methods](/img/documentation/qore/qore-api-docs.jpg)

### Example Get Using Postman

**Example how to get data via API using postman:**

![Postman Example](/img/documentation/qore/qore-api-postman.png)

```shell"
{
    "nodes": [
        {
            "id": "27e09ec0-8a2a-4c9c-b83c-d777445493eb",
            "createdAt": "2021-05-10T02:23:58.223Z",
            "updatedAt": "2021-05-10T02:23:58.223Z",
            "no": "01",
            "name": "Dreamy",
            "hexColor": "#b65a65",
            "bpom": "NA18201302585",
            "active": true,
            "type": "makeup"
        },
        {
            "id": "ed4962c8-414c-481e-a853-169bfd8a3bfa",
            "createdAt": "2021-05-17T02:10:53.171Z",
            "updatedAt": "2021-05-17T02:10:53.171Z",
            "no": "02",
            "name": "Juicy",
            "hexColor": "#cf578a",
            "bpom": "NA18201302587",
            "active": true,
            "type": "makeup"
        },
        {
            "id": "a1b5a358-28da-4b14-812b-a6409fb118b8",
            "createdAt": "2021-05-17T02:11:01.523Z",
            "updatedAt": "2021-05-17T02:11:01.523Z",
            "no": "03",
            "name": "Flame",
            "hexColor": "#d50032",
            "bpom": "NA18201302589",
            "active": true,
            "type": "makeup"
        },
        ...
    ],
    "totalCount": "50"
}
```

### Tables and View Permission

If you try to execute the method above, but the result is authentication error, you must change table and view permission settings.

**Change table and view permission settings:**

1. Click **settings**, click **User Roles**, check the allowed method in view based on role

![Permission Settings](/img/documentation/qore/qore-permission-settings.png)

2. Role List

- Admin : Admin can access everything inside this project.
- Public : Anyone on the internet can access allowed method

3. Create a New Role

For the example you want to make a role for content manager in your CMS App that only can see, add, edit, and delete product. You can create new role call content manager.

- Create new role:

![New Role](/img/documentation/qore/qore-new-role.png)

- Give method permission to content manager role:

![Content Manager](/img/documentation/qore/qore-content-manager.png)
