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
    description: Contains a list of actions that will be run on the rows which are checked. Actions which can only be taken on a single resource should be disabled when multiple resources are selected.
    top: "-2"
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
    left: 82
  - title: Individual Action Menu
    description: Description goes here
    top: 45
    left: 82
---
Click image for details
<link rel="stylesheet" type="text/css" href="../../css/annotations.css">

<div class="ao-item">

	<div class="ao-preview">
		<input type="checkbox" id="ao-toggle" class="ao-toggle" name="ao-toggle" />
		<img src="../../media/screenshots/table.png" alt="image01" />
		<div class="ao-annotations">
      {% for element in page.elements %}
      <span style="top: {{ element.top }}%; left: {{ element.left }}%;" title="{{ element.description }}">
        {{ element.title }}
      </span>
    {% endfor %}
		</div>
	</div>
</div>
<ul>
  {% for element in page.elements %}
  <li><strong>{{ element.title }}</strong>
    <ul style="padding-left: 4em; margin: 2em 0;">
      <li style="list-style: inherit">{{ element.description }}</li>
    </ul>
  </li>
  {% endfor %}
</ul>
