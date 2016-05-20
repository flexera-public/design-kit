---
layout: modules
title: Forms
description: "Sass module for css forms at RightScale."
github: https://github.com/rightscale-design/designkit-forms
npm: https://www.npmjs.com/package/designkit-forms
example: http://rightscale-design.github.io/designkit-forms/
slug: modules
weight: 6
---

## Install

```bash
npm i designkit-forms
```

## Usage

```html
<form>
  <label for="my_input">Form Label</label>
  <input id="my_input" class="form-control" type="text" name="name" value="" placeholder="Placeholder text...">
</form>
```

## CSS

```css
/*
//
// Designkit-Forms
// --------------------------------------------------
*/
fieldset {
  padding: 0;
  margin: 0;
  border: 0;
}

label {
  display: block;
  font-size: 11px;
  font-weight: bold;
  color: #57626C;
  margin-bottom: 0.3rem;
}

.form-control::-webkit-input-placeholder {
  color: #c2cad2;
  /* 50% of #8596A5 */
  vertical-align: middle;
}

.form-control::-moz-placeholder {
  color: #c2cad2;
  /* 50% of #8596A5 */
  vertical-align: middle;
}

.form-control:-moz-placeholder {
  color: #c2cad2;
  /* 50% of #8596A5 */
  vertical-align: middle;
}

.form-control:-ms-input-placeholder {
  color: #c2cad2;
  /* 50% of #8596A5 */
  vertical-align: middle;
}

.form-control,
.form-select {
  min-height: 2.125rem;
  padding: 0.4375rem 0.5rem;
  font-size: 13px;
  color: #76899A;
  vertical-align: middle;
  background-color: #fff;
  border: 1px solid #D1D6DC;
  border-top-color: #cbd1d8;
  border-radius: 2px;
  outline: none;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.08);
}

.form-control.focus, .form-control:focus,
.form-select.focus,
.form-select:focus {
  border-color: #a6afbb;
  border-bottom-color: #a0aab7;
  outline: none;
}

.form-select {
  border: 1px solid #D1D6DC;
  box-shadow: none;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  appearance: none;
}

.input-sm {
  min-height: 1.625rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  font-size: 12px;
}

.input-lg {
  padding: 0.375rem 0.625rem;
  font-size: 16px;
}

.input-block {
  display: block;
  width: 100%;
}
```
