---
title: "SQL: From Zero to Hero"
publishedAt: 2022-08-05
description: "Learn SQL from scratch"
slug: "sql-zero-to-hero"
isPublish: false
---

Structured Query Language (SQL) is a fantastic tool to query a variety of data and is used by most applications nowadays.

Today, let's learn how to do simple queries in SQL, and perform several advanced techniques at the end. I assume you have tried SQL before and just want a quick refresh.

## Scenario

You have a database of a bakery shop, with tables including Product, Category,... like below:

It is essential that you know how to query such data so that you can display it somewhere (for searching on web, for putting in orders...). Let's start with something simple!

## SELECT & FROM

SELECT and FROM are the two most basic commands in SQL. The syntax is already self-explanatory. If you want to find the names of the products, you can do something like this:

```sql
SELECT [name]
FROM products
```

If you want to query every field in the table, you can use the symbol *:

```sql
SELECT *
FROM products
```
>`NOTE: However, this is not encouraged since you should only select whatever fields/columns you need in the database.`

## WHERE

## GROUP BY

## ORDER BY

## INNER JOIN

## Sub query
