---
layout: layout.njk
title: Fontolan Campaign
tags: projects
order: 2
images:
  - /assets/images/projects/fontolan/1.png
  - /assets/images/projects/fontolan/2.png
  - /assets/images/projects/fontolan/3.png
---

<h2>{{ title }}</h2>

{% for img in images %}
  <img src="{{ img }}" alt="{{ title }} image">
{% endfor %}

{% set nextProject = collections.projects | getNextCollectionItem(page) %}
{% if nextProject %}
  <a href="{{ nextProject.url }}">Next Project →</a>
{% endif %}