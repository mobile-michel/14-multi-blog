---
title: Blog
description: This blog is about photography.
layout: default
date: 2024-01-03
override:tags: ["primary", "footer"]
---
{% for post in collections.blog %}
- [{{ post.data.title }}]({{ post.data.title | slugify | prepend: '/blog/' | append: '/' | url }}) published on {{ post.data.date | date: '%d  %b %Y' }} by {{ post.data.author }}
{% endfor %}