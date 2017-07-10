---
layout: module-doc
title: Dropdowns
description: "A Sass module for dropdown menus in RightScale apps"
name: designkit-dropdown
source: https://github.com/rightscale-design/designkit-dropdown
npm: https://www.npmjs.com/package/designkit-dropdown
version: 1.0.0
updated: 7/10/2017
css-link: https://raw.githubusercontent.com/rightscale-design/designkit-dropdown/master/dist/designkit-dropdown.css
example-1: https://cdn.rawgit.com/rightscale-design/designkit-dropdown/master/docs/basic.html
example-2: https://cdn.rawgit.com/rightscale-design/designkit-dropdown/master/docs/drop-up.html
example-3: https://cdn.rawgit.com/rightscale-design/designkit-dropdown/master/docs/dividers.html
example-4: https://cdn.rawgit.com/rightscale-design/designkit-dropdown/master/docs/header.html
example-5: https://cdn.rawgit.com/rightscale-design/designkit-dropdown/master/docs/title.html
example-6: https://cdn.rawgit.com/rightscale-design/designkit-dropdown/master/docs/scroll.html
example-7: https://cdn.rawgit.com/rightscale-design/designkit-dropdown/master/docs/select.html
example-8: https://cdn.rawgit.com/rightscale-design/designkit-dropdown/master/docs/filter.html
example-9: https://cdn.rawgit.com/rightscale-design/designkit-dropdown/master/docs/multi.html
install: "npm install designkit-dropdown --save"

slug: modules
weight: 8
---

## Install

```bash
{{ page.install }}
```

## Examples

### Basic Usage

**HTML**

```html
<div class="dropdown open">
  <button class="btn btn-default dropdown-toggle" type="button">
    Dropdown Button
  </button>
  <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
```

**Example**

<iframe class="ba b--black-10 br2" style="width: 100%; height: 194px;" src="{{ page.example-1 }}"></iframe>

### Optional Drop up

**HTML**

```html
<div class="dropup open">
  <button class="btn btn-default dropdown-toggle" type="button">
    Dropup Button
  </button>
  <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
```

**Example**

<iframe class="ba b--black-10 br2" style="width: 100%; height: 190px;" src="{{ page.example-2 }}"></iframe>

### Optional Dividers

**HTML**

```html
<div class="dropdown open">
  <button class="btn btn-default dropdown-toggle" type="button">
    Dropdown Button
  </button>
  <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Settings</a>
  </div>
</div>
```

**Example**

<iframe class="ba b--black-10 br2" style="width: 100%; height: 250px;" src="{{ page.example-3 }}"></iframe>

### Optional Headers

**HTML**

```html
<div class="dropdown open">
  <button class="btn btn-default dropdown-toggle" type="button">
    Dropdown Button
  </button>
  <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <h6 class="dropdown-header">Settings</h6>
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
```

**Example**

<iframe class="ba b--black-10 br2" style="width: 100%; height: 310px;" src="{{ page.example-4 }}"></iframe>

### Optional Menu Title

**HTML**

```html
<div class="dropdown open">
  <button class="btn btn-default dropdown-toggle" type="button">
    Dropdown Button
  </button>
  <div class="dropdown-menu">
      <div class="dropdown-title">
        <h6>Optional Menu Title</h6>
      </div>
      <div class="dropdown-body">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
      </div>
  </div>
</div>
```

**Example**

<iframe class="ba b--black-10 br2" style="width: 100%; height: 242px;" src="{{ page.example-5 }}"></iframe>

### Optional Scroll

**HTML**

```html
<div class="dropdown open">
  <button class="btn btn-default dropdown-toggle" type="button">
    Dropdown Button
  </button>
  <div class="dropdown-menu dropdown-menu-scrollable">
    <div class="dropdown-body">
      <h6 class="dropdown-header">Actions</h6>
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <h6 class="dropdown-header">Years</h6>
      <a class="dropdown-item"href="#">1998</a>
      <a class="dropdown-item"href="#">1997</a>
      <a class="dropdown-item"href="#">1996</a>
      <a class="dropdown-item"href="#">1997</a>
      <a class="dropdown-item"href="#">1994</a>
      <a class="dropdown-item"href="#">1998</a>
      <a class="dropdown-item"href="#">1997</a>
      <a class="dropdown-item"href="#">1996</a>
      <a class="dropdown-item"href="#">1997</a>
      <a class="dropdown-item"href="#">1994</a>
    </div>
  </div>
</div>
```

**Example**

<iframe class="ba b--black-10 br2" style="width: 100%; height: 300px;" src="{{ page.example-6 }}"></iframe>

### Select Menu

**HTML**

```html
<div class="dropdown open">
  <button class="btn btn-default dropdown-toggle" type="button">
    Dropdown Button
  </button>
  <div class="dropdown-menu dropdown-menu-select">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
```

**Example**

<iframe class="ba b--black-10 br2" style="width: 100%; height: 220px;" src="{{ page.example-7 }}"></iframe>

### Filter Menu

**HTML**

```html
<div class="dropdown open">
  <button class="btn btn-default dropdown-toggle" type="button">
    Dropdown Button
  </button>
  <div class="dropdown-menu dropdown-menu-filter">
    <div class="dropdown-filter">
      <input id="my_input" class="form-control" type="text" name="name" value="" placeholder="Filter">
    </div>
    <div class="dropdown-body">
      <a class="dropdown-item"href="#">1998</a>
      <a class="dropdown-item"href="#">1997</a>
      <a class="dropdown-item"href="#">1996</a>
      <a class="dropdown-item"href="#">1997</a>
      <a class="dropdown-item"href="#">1994</a>
      <a class="dropdown-item"href="#">1998</a>
      <a class="dropdown-item"href="#">1997</a>
      <a class="dropdown-item"href="#">1996</a>
      <a class="dropdown-item"href="#">1997</a>
      <a class="dropdown-item"href="#">1994</a>
      <a class="dropdown-item"href="#">1993</a>
      <a class="dropdown-item"href="#">1992</a>
    </div>
  </div>
</div>
```

**Example**

<iframe class="ba b--black-10 br2" style="width: 100%; height: 460px;" src="{{ page.example-8 }}"></iframe>

### Multiple Menu Options

**HTML**

```html
<div class="dropdown open">
  <button class="btn btn-default dropdown-toggle" type="button">
    Dropdown Button
  </button>
  <div class="dropdown-menu dropdown-menu-select dropdown-menu-filter dropdown-menu-scrollable dropdown-menu-left">
    <div class="dropdown-title">
      <h6>Optional Menu Title</h6>
    </div>
    <div class="dropdown-filter">
      <input id="my_input" class="form-control" type="text" name="name" value="" placeholder="Filter">
    </div>
    <div class="dropdown-body">
      <h6 class="dropdown-header">Actions</h6>
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <h6 class="dropdown-header">Years</h6>
      <a class="dropdown-item"href="#">1998</a>
      <a class="dropdown-item"href="#">1997</a>
      <a class="dropdown-item"href="#">1996</a>
      <a class="dropdown-item"href="#">1997</a>
      <a class="dropdown-item"href="#">1994</a>
      <a class="dropdown-item"href="#">1998</a>
      <a class="dropdown-item"href="#">1997</a>
      <a class="dropdown-item"href="#">1996</a>
      <a class="dropdown-item"href="#">1997</a>
      <a class="dropdown-item"href="#">1994</a>
    </div>
  </div>
</div>
```

**Example**

<iframe class="ba b--black-10 br2" style="width: 100%; height: 400px;" src="{{ page.example-9 }}"></iframe>

## CSS

<div class="snippet">
  <pre id="css_contents" class="highlighter-rouge snippet-css"><code class="css"></code></pre>
</div>
