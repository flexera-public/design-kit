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

## Author

Jason Melgoza

## License

The MIT License (MIT)

Copyright (c) 2016 RightScale

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
