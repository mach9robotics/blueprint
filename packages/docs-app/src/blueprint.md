@# Blueprint

#### Blueprint is a React-based UI toolkit for the web.

It is optimized for building complex data-dense interfaces for desktop applications.

@reactDocs Welcome

<div class="@ns-callout @ns-intent-primary @ns-icon-star">
<h4 class="@ns-heading">Blueprint v4 is now in stable release</h4>

[Check out the new features and migration guides to upgrade from v3.x &rarr;](https://github.com/palantir/blueprint/wiki/Blueprint-4.0)

</div>

@## Quick start

### Install

**@mach9/blueprint-core** is the primary Blueprint package on NPM and home to over 40 components.
Install it with your package manager ([Yarn](https://yarnpkg.com/) is used in this example):

```sh
yarn add @mach9/blueprint-core react react-dom
```

Additional components live in the **@mach9/blueprint-icons**, **@mach9/blueprint-datetime**, **@mach9/blueprint-select**, **@mach9/blueprint-table**, and **@mach9/blueprint-timezone** packages,
separated by use case and significant dependencies. All have peer dependencies on **react** and **react-dom**, so these two packages must be installed alongside Blueprint.

### Import

Import React components from the appropriate package.

```tsx
import { Button } from "@mach9/blueprint-core";

<Button intent="success" text="button content" onClick={incrementCounter} />
```

For this button to be styled correctly in the DOM, it needs its associated CSS to be loaded on the page.
Don't forget to include the **main CSS file** from each Blueprint package and their dependencies!
The following example shows an `index.html` file; the same stylesheets should be loaded if you use a bundler like Webpack.

```html
<link href="path/to/node_modules/normalize.css/normalize.css" rel="stylesheet" />
<!-- blueprint-icons.css file must be included alongside blueprint.css! -->
<link href="path/to/node_modules/@mach9/blueprint-icons/lib/css/blueprint-icons.css" rel="stylesheet" />
<link href="path/to/node_modules/@mach9/blueprint-core/lib/css/blueprint.css" rel="stylesheet" />
<!-- add other blueprint-*.css files here -->
```

@page getting-started
@page reading-the-docs
@page principles
