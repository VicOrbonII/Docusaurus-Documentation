---
title: "Configure the LMS"
date: 2018-12-29T11:02:05+06:00
lastmod: 2020-01-05T10:42:26+06:00
weight: 6
draft: false
# search related keywords
keywords: ["Server"]
---

1. Navigate to admin folder under Stock Knowledge LMS Folder
   > X:\xampp\htdocs\aws\admin
2. Open \_conf.dba.inc.php
3. Change database to your created database
   > \$dba->database = "YOUR DATABASE NAME";
4. Change home_url to your local admin url
   > \$home_url = 'http://localhost/aws/admin';
5. Done.
