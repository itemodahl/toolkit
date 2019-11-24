# Installation

> [JSON-stat Javascript Toolkit v.1](README.md) ▸ **Installation**

<blockquote>This is the documentation of JSON-stat Javascript Toolkit version 1. Version 0 has slightly different features and installation procedures that are documented <a href="https://github.com/badosa/JSON-stat/wiki/Installation">elsewhere</a>.</blockquote>

> [Wiki](Home) ▸ **Installation**

### Browser

#### Script tag

Copy the latest version of the [JJT code](https://raw.githubusercontent.com/jsonstat/toolkit/master/iife.js) to your server and use a script tag in your webpage to link to it. JJT is also available from several CDNs ([unpkg](https://unpkg.com), [jsDelivr](https://www.jsdelivr.com/)):

```html
<script src="https://unpkg.com/jsonstat-toolkit@1.0.6"></script>
```

```html
<script src="https://cdn.jsdelivr.net/npm/jsonstat-toolkit@1.0.6"></script>
```

The JJT works on any modern browser. It also supports Internet Explorer 9 or higher as long the JJT connection capabilities (*JSONstat(url).then(func)*) are not used (and even older Internet Explorer versions as long as an [Array.isArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray) polyfill is provided). It is also possible to use the JJT connection capabilities on Internt Explorer as long as polyfills for [promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) and [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) are provided.

```html
<!-- Using JSONstat XHR capabilities require Promises and Fetch support. Polyfill included for IE, for example -->
<script src="https://cdn.jsdelivr.net/combine/npm/es6-promise@4.2.8,npm/whatwg-fetch@3.0.0"></script>
<!-- End of optional polyfilling -->
<script src="https://unpkg.com/jsonstat-toolkit@1.0.6"></script>
```

#### ECMAScript module

Very modern browsers support ECMAScript modules. Copy the latest version of the [JJT ECMAScript module](https://raw.githubusercontent.com/jsonstat/toolkit/master/import.mjs) to your server and import it in your webpage. The JJT ECMAScript module is also available from several CDNs ([unpkg](https://unpkg.com), [jsDelivr](https://www.jsdelivr.com/)):

```html
<script type="module">
import JSONstat from "https://unpkg.com/jsonstat-toolkit@1.0.6/import.mjs";
</script>
```

```html
<script type="module">
import JSONstat from "https://cdn.jsdelivr.net/npm/jsonstat-toolkit@1.0.6/import.mjs";
</script>
```

The JJT ECMAScript module works on any browser that support ECMAScript modules.

### Node.js

```
$ npm install jsonstat-toolkit
```

#### Loading

##### CommonJS

```js
const JSONstat = require("jsonstat-toolkit");
```

##### ES Module

```js
import JSONstat from "jsonstat-toolkit";
```
