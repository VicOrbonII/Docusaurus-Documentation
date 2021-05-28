---
title: "Get Student"
date: 2020-12-01T10:38:24Z
description: "Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet"
weight: 4
---

#### Description

Return student record.

### Method

```PHP
GET
```

### Endpoint

> /admin/api.php?f=getStudent&id={student id}

### Header

> Content-Type: application/x-www-form-urlencoded

### Body

> Not Applicable

### Response

##### Success

```JavaScript
{
    result: "success",      //String
    content: [
     {
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
    ]

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

##### POST Request

```Javascript
const students = async () => {
    const response = await fetch('http://stockknowledge.org/admin/api.php?f=getStudent&id=2',{
        method: 'POST',
        body: 'id=4',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
    return await response.json();
}
```
