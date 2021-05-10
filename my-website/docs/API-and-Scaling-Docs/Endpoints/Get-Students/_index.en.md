---
title: "Get Students"
date: 2018-12-29T11:02:05+06:00
description: "Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet"
weight: 4
---

#### Description

Return all student base on teacher

### Method

```PHP
POST
```

### Endpoint

> /admin/api.php?f=getStudents

### Header

> Content-Type: application/x-www-form-urlencoded

### Body

> id={teacher id}

### Response

##### Success

```JavaScript
{
    result: "success",      //String
    content: {
        id: int,
        userid: int,
        username: string,
        email: string,
        mobile: int,
        firstname: string,
        lastname: string,
        gradelevel: int,
        schoolname: string,
        preferences: string,
        points: int
      }
}
```

##### Fail

```JavaScript
{
    result: "fail"            //String
}
```

### Example

#### Javascript

##### GET Request

```Javascript
const student = async () => {
    const response = await fetch('http://stockknowledge.org/admin/api.php?f=getStudent&id=2');
    return await response.json();
}
```
