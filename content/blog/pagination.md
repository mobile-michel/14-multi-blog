---
title: Blog
layout: default
date: 2024-01-03
eleventyExcludeFromCollections: true
pagination:
  data: collections.blog
  size: 1
permalink: "{{ pagination.items[0].data.title | slugify | prepend: '/blog/' | append: '/' }}"
---
<h3>{{ pagination.items[0].data.title }}</h3>
<p>{{ pagination.items[0].content }}</p>