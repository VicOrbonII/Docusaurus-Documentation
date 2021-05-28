---
title: "Edit Student"
date: 2020-12-01T10:38:14Z
description: "Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet"
weight: 3
---

#### Description

Edit student record.

### Method

```PHP
POST
```

### Endpoint

> /admin/api.php?f=editStudent&id={student id}

### Header

> Content-Type: multipart/form-data

### Body

##### Form Data

{{< notice note >}}
At lease one key-value pair is present.
{{< /notice >}}

| Key         | Value   |
| ----------- | ------- |
| username    | String  |
| password    | String  |
| email       | String  |
| mobile      | Integer |
| first_name  | String  |
| last_name   | String  |
| grade_level | Integer |
| school_name | Integer |
| preferences | String  |
| progress    | Integer |
| file        | blob    |

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
const photo = document.querySelector('input[type=file]');

let formData = new FormData();
formData.append('first_name','Juan');
formData.append('last_name','Dela Cruz');
formData.append('file', photo.files[0]);

const editStudent = async () => {
    const response = await fetch('http://stockknowledge.org/admin/api.php?f=editStudent&id=2',{
        method: 'POST',
        body: formData,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
    return await response.json();
}
```
