---
layout: module-doc
title: Forms
description: "Sass module for forms used in RightScale apps"
name: designkit-forms
source: https://github.com/rightscale-design/designkit-forms
npm: https://www.npmjs.com/package/designkit-forms
version: 1.1.2
updated: 4/27/2017
example-1: https://cdn.rawgit.com/rightscale-design/designkit-forms/3160ad59809428b6d352b71c4564ffe8812c7005/index.html
css-link: https://raw.githubusercontent.com/rightscale-design/designkit-forms/master/dist/designkit-forms.css
install: "npm install designkit-forms --save"
dependencies:
  - name: Colors
    url: /modules/colors/

slug: modules
weight: 7
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

Basic styled form controls.

**HTML**

```html
<form>
  <label for="name">Basic Form Label</label>
  <input class="form-control" type="text" id="name" placeholder="Placeholder text...">
  <p class="form-note">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</form>
```

**Example**

<iframe style="height: 722px;" src="{{ page.example-1 }}"></iframe>

## CSS

<div class="snippet">
  <pre id="css_contents" class="highlighter-rouge snippet-css"><code class="css"></code></pre>
</div>
