---
reference: select
---

@# Select

The [__@mach9/blueprint-select__ package](https://www.npmjs.com/package/@mach9/blueprint-select)
provides React components for to selecting items from a list:

- [Select](#select/select-component) for selecting items in a list (DEPRECATED).

- [Select2](#select/select2) replacement for Select, uses Popover2 instead of Popover under the hood.

- [Suggest](#select/suggest) for selecting items in a list, from a text input (DEPRECATED).

- [Suggest2](#select/suggest2) replacement for Suggest, uses Popover2 instead of Popover under the hood.

- [MultiSelect](#select/multi-select) for selecting multiple items in a list (DEPRECATED).

- [MultiSelect2](#select/multi-select2) replacement for MultiSelect, uses Popover2 instead of Popover under the hood.

- [Omnibar](#select/omnibar), a macOS spotlight-style typeahead component.

- [QueryList](#select/query-list), a higher-order component that provides interactions between a query string and a list of items.

Make sure to review the [getting started docs for installation info](#blueprint/getting-started).

```sh
npm install --save @mach9/blueprint-select
```

Import the package stylesheet in Sass:

```scss
@import "~@mach9/blueprint-select/lib/css/blueprint-select.css";
```

...or in plain HTML:

```html
<link href="path/to/node_modules/@mach9/blueprint-select/lib/css/blueprint-select.css" rel="stylesheet" />
```

@page select-component
@page select2
@page suggest
@page suggest2
@page multi-select
@page multi-select2
@page omnibar
@page query-list
