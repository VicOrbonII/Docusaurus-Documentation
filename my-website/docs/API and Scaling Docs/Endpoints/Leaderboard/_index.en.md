---
title: "Leaderboard"
date: 2018-12-29T11:02:05+06:00
icon: "ti-panel"
description: "Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet"
weight: 1
---

#### Description

Return students record in descending order base on student points

### Method

```PHP
GET/POST
```

### Endpoint

> /admin/api.php?f=leaderboard

### Header

> Content-Type: application/x-www-form-urlencoded

### Body (Optional)

##### Filter by school name

> school_name={schoolname}

##### Filter by grade level

> grade_level={gradelevel}

##### Filter by school name and grade level

> school_name={schoolname}&grade_level={gradelevel}

### Response

##### Success

```JavaScript
{
    result: "success",         //String
    content: [                 //Array of Objects
        {
        id: int,
        user_id: int,
        firstname: string,
        lastname: string,
        gradelevel: int,
        schoolname: int,
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

##### GET Request

```Javascript
const leaderboard = async () => {
    const response = await fetch('http://stockknowledge.org/admin/api.php?f=leaderboard');
    return await response.json();
}
```

##### POST Request

```Javascript
const leaderboard = async () => {
    const response = await fetch('http://stockknowledge.org/admin/api.php?f=leaderboard',{
        method: 'POST',
        body: 'grade_level=1',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
    return await response.json();
}
```
