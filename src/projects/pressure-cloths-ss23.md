---
layout: layout.njk
title: Pressure Clothes SS 23
tags: projects
order: 1
images:
  - /assets/images/projects/pressure/pressure1.png
  - /assets/images/projects/pressure/pressure2.png
---

<h2>{{ title }}</h2>

{% for img in images %}
  <img src="{{ img }}" alt="{{ title }} image">
{% endfor %}

{% set nextProject = collections.projects | getNextCollectionItem(page) %}
{% if nextProject %}
  <a href="{{ nextProject.url }}">Next Project →</a>
{% endif %}