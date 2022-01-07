---
sidebar_position: 3
---

# Tables

Let's discover **Tables** in Qore.

## What is Table?

A table in a relational database is much like a **spreadsheet: It consists of rows and columns.** Each **row represents a unique record**, and each **column represents a field in the record.** For example, a table that contains product data for a brand might contain a row for each product and columns representing product information such as product number, name, price, etc. (**[PostgreSQL](https://www.postgresql.org/docs/14/ddl-basics.html)**)

## Create Table

To create a table manually without Qore, we use the aptly name **CREATE TABLE** comand. For example:

```jsx title="Create Table without Qore"
CREATE TABLE products (
    product_no integer,
    name text,
    price numeric
);
```

**Create Table with Qore:**

1. Click **+ button**, click **add new table button**, insert table name

![Signup Page](/img/documentation/qore/qore-new-table.png)

2. Qore will create **table** and **view** called All Table Name

![Signup Page](/img/documentation/qore/qore-table-view.png)

### What is View?

View is a **virtual table** based on the result-set of an SQL statement. A view **contains rows and columns, just like a real table.** The fields in **a view are fields from one or more real tables** in the database. We can add SQL statements and functions to a view and present the data as if the data were coming from one single table. (**[W3schools](https://www.w3schools.com/sql/sql_view.asp)**)

### New Column

1. Click **+ button** on upper right existing column name

- insert column Name

![Signup Page](/img/documentation/qore/qore-new-column.png)

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
