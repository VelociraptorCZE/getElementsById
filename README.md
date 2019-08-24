# getElementsById

A simple library for selecting multiple elements by id.

This function slightly resembles ```document.getElementById``` except you can pass indefinite number of ids 
and function returns an array with your selected elements.

Also works seamlessly with array destructuring.

### Basic example with array destructuring

```js
import getElementsById from "getelementsbyid";

const [nav, article] = getElementsById("nav", "article");
```