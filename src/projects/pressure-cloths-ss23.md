---
layout: layout.njk
title: Pressure Clothes SS 23
tags: projects
order: 1
images:
  - /assets/images/pressure1.jpg
  - /assets/images/pressure2.jpg
---

<h2>{{ title }}</h2>

{% for img in images %}
  <img src="{{ img }}" alt="{{ title }} image">
{% endfor %}

{% set nextProject = collections.projects | getNextCollectionItem(page) %}
{% if nextProject %}
  <a href="{{ nextProject.url }}">Next Project →</a>
{% endif %}