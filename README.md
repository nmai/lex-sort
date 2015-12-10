#lex-sort

Use this module to sort an array of strings based on an arbitrary lexicographic ordering.

Babel transpilation is not set up so please use Node 4.0+

Example usage:

```js
var sort = require('lex-sort')

// Pass in an array of strings to sort and a string representing desired order
var sorted = sort(["acb", "abc", "bca"], "abc")

console.log(sorted) //--> [ 'abc', 'acb', 'bca' ]
```

I also set up 3 tests which can be run via `npm test`.
