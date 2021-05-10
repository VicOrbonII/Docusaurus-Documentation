---
title: "Add Point"
date: 2018-12-29T11:02:05+06:00
description: "Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet"
weight: 2
---

#### Description

Add point to student record.

### Method

```PHP
POST
```

### Endpoint

> /admin/api.php?f=addPoints

### Header

> Content-Type: application/x-www-form-urlencoded

### Body

> student_id={student id}&points={points}

### Response

##### Success

```JavaScript
{
    result: "success"       //String
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
const addPoint = async () => {
    const response = await fetch('http://stockknowledge.org/admin/api.php?f=addPoint',{
        method: 'POST',
        body: 'student_id=4&points=10',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
    return await response.json();
}
```
