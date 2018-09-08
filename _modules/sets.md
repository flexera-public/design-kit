---
layout: module-doc
title: Sets
description: "Sass module for a name and value container."
name: designkit-sets
source: https://github.com/rightscale-design/designkit-sets
npm: https://www.npmjs.com/package/designkit-sets
version: 1.0.0
updated: 7/11/2017
css-link: https://raw.githubusercontent.com/rightscale-design/designkit-sets/master/dist/designkit-sets.css
example-1: https://cdn.rawgit.com/rightscale-design/designkit-sets/master/docs/basic.html
install: "npm install designkit-sets --save"
dependencies:
  - name: Colors
    url: /modules/colors/

slug: modules
weight: 12
---

## Install

```bash
{{ page.install }}
```

## Dependencies

<ul>
  {% for item in page.dependencies %}
    <li><a href="{{ item.url }}">{{ item.name }}</a></li>
  {% endfor %}
</ul>

## Examples

### Basic Usage

Sets can be used as a trigger. It's content is meant to show the name of a list or "set" and the count of that set.

**HTML**

```html
<a href="#" class="set"><span class="set-label">Servers</span><span class="set-count">19</span></a>
```

**Example**

<iframe style="height: 110px;" src="{{ page.example-1 }}"></iframe>

## CSS

<div class="snippet">
  <pre id="css_contents" class="highlighter-rouge snippet-css"><code class="css"></code></pre>
</div>
