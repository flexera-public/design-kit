---
layout: patterns
title:  "Tables"
categories: UI
slug: patterns
weight: 2

description: Example description copy.
problem: Example copy there are lots of different paths a merchant can take. Listing them all out in the interface would make the experience feel overwhelming and cluttered.
solution: Example copy action lists in popovers let merchants expose additional information and actions when they’re ready to explore them.
elements:
  - title: Selected Actions Menu
    description: Description goes here
    top: -2
    left: 2
  - title: Global Action Buttons
    description: Description goes here
    top: 5
    left: 40
  - title: Filter Category Menu
    description: Description goes here
    top: 25
    left: 5
  - title: Filter Text Box
    description: Description goes here
    top: 15
    left: 31
  - title: Column Selector Menu
    description: Description goes here
    top: 8
    left: 2
  - title: Individual Action Menu
    description: Description goes here
    top: 45
    left: 2
---
<link rel="stylesheet" type="text/css" href="../../css/annotations.css">

<div class="ao-item">
	<!-- <div class="ao-details">
		<h2>Some title</h2>
		<p>Some description</p>
	</div> -->
	<div class="ao-preview">
		<input type="checkbox" id="ao-toggle" class="ao-toggle" name="ao-toggle" />
		<img src="../../media/screenshots/table.png" alt="image01" />
		<div class="ao-annotations">
			<!-- <span>Selected Actions Menu</span>
			<span>Global Action Buttons</span>
			<span>Filter Category Menu</span>
			<span>Filter Text Box</span>
			<span>Column Selector Menu</span>
      <span>Individual Action Menu</span> -->
    {% for detail in collection.details %}
      <span style="top: {% detail.top %}%; left: {% detail.left %}%;">
        {% detail.title %}
      </span>
    {% endfor %}
		</div>
	</div>
</div>
<ul>
  {% for detail in collection.details %}
  <li><strong>{% detail.title %}</strong>
    <ul>
      <li>{% detail.description %}</li>
    </ul>
  </li>
  {% endfor %}
</ul>
