---
layout: modules
title: Card
description: "Sass module for card CSS."
github: https://github.com/rightscale-design/designkit-card
npm: https://www.npmjs.com/package/designkit-card
example: https://rightscale-design.github.io/designkit-card/
slug: modules
weight: 4
---

<iframe frameborder="0" src="../cards.html">
</iframe>

```bash
npm i designkit-card
```

## Markup

```html
<div class="card">
  <div class="card-content">
    <div class="card-heading">
      <h3 class="card-title">Card UI</h3>
    </div>
    <div class="card-body">
      <div>
        <!--Card Content-->
      </div>
    </div>
    <div class="card-footer">
      <div>Action bar</div>
    </div>
  </div>
</div>
```

## CSS

```css
.card {
  background-color: #fff;
  border: 1px solid #D1D6DC;
  border-bottom-color: #bac1ca;
  border-radius: 2px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.card-heading {
  position: relative;
  min-height: 3.625rem;
  padding: 1.125rem 1.25rem 1.5rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.card-heading:after {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 4px;
  content: "";
  background-color: #F4F5F7;
  border-top: 1px solid #D1D6DC;
  border-bottom: 1px solid #D1D6DC;
  box-shadow: inset 0 0 1px 1px rgba(0, 0, 0, 0.05);
}

.card-title {
  margin: 0;
  -webkit-user-select: all;
  -moz-user-select: all;
  -ms-user-select: all;
  user-select: all;
}

.card-body {
  padding: 1.125rem 1.25rem 1.5rem;
}

.card-footer {
  padding: 0.625rem 0.8125rem 0.625rem;
  background-color: #F4F5F7;
  border-top: 1px solid #D1D6DC;
  border-radius: 0 0 2px 2px;
}
```
